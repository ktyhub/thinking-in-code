---
title: "codebase-memory-mcp v0.12.0"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.12.0"
version: "v0.12.0"
published: "2026-10-15"
type: "minor"
lang: "en"
summary: "Meet CBM Lens, and a code graph that reads your documentation."
---

# codebase-memory-mcp v0.12.0

# v0.12.0

**Meet CBM Lens, and a code graph that reads your documentation.**

v0.12.0 is the biggest release of codebase-memory-mcp yet: 231 merged pull requests since v0.11.0, 40 of them from the community.

Four headlines define it.

1. **CBM Lens Beta: the code graph, for humans.** Until now the graph's power reached people only through their agents. Lens is our new human interface. It brings the code knowledge graph to you directly. It ships inside the binary you already run and listens on loopback only. It puts source, the graph, the architecture, index coverage and a browser-local assistant side by side, and every fact it shows says where it comes from. Lens is built on the work of @BernhardJackiewicz, who now joins the project to own it.

2. **Documentation joins the graph.** Until now the graph stopped where the code stopped. Now doc comments, Markdown, reStructuredText, AsciiDoc and PDF documents, architecture decision records, diagrams and OpenAPI specs are part of it. Each is linked to the functions, types and files it talks about. An agent can now traverse your documentation and land on the exact code a page describes, and walk from a function back to every page that explains it. So can you, in Lens. Linking is strict by design: a reference becomes an edge only when it names exactly one definition. Link families that have not yet cleared their accuracy bar are counted and reported, never guessed into the graph.

3. **Smart CI: the graph picks the tests.** `detect_changes` can now say which tests a change can affect. It seeds the graph from the diff, walks everything that depends on the changed code, and names the tests at the end of those paths, each with its reason. When the evidence is missing or doubtful, it answers "run everything" and says why; it never narrows silently. codebase-memory-mcp's own CI is the first user: pull requests run only the test lanes their change touches, and the graph's test selection runs beside every PR.

4. **Infrastructure as code in the graph.** Kubernetes manifests, Helm charts, Flux and Argo CD, Compose files, Dockerfiles and the scripts, Makefiles and CI jobs that deploy them now link up. A Service can be followed through its workload, its image and its Dockerfile to the program the container runs.

The code graph itself got sharper too:

- C typedefs, macros and enumerators get identities of their own.
- Process launches become `SPAWNS` edges.
- Resolution fixes cover C#, C++, TypeScript, Python, PHP, Rust and Go.

> **Upgrading?** The first index of each existing project after the upgrade is a full rebuild, once. Details are in [Upgrade notes](#upgrade-notes). A few identities and defaults also changed; see [Breaking changes](#breaking-changes).

## Welcome, @BernhardJackiewicz

**@BernhardJackiewicz joins codebase-memory-mcp as the subsystem owner for the UI.** @BernhardJackiewicz built the reading interface on the CBM read surface that became CBM Lens, and contributed it to the project (#2068; design and tracking in #1964). He also rewrote the README's Lens section with new walkthroughs and screenshots (#2383). From this release on he owns the UI subsystem and takes care of Lens. We are very glad to have him on board.

## Highlights

- **CBM Lens Beta, an interface for people.** It explores a project by the file you read or the code you mark, by graph neighbourhood, and by architecture, routes and hotspots. It also explains index coverage, edits the project's architecture decision record, and answers questions about your selection with a model that runs in your browser. It is built into the binary: `codebase-memory-mcp --ui=true` (#2068).
- **Documentation joins the graph.**
  - Doc-comment references become `MENTIONS` edges from the documented definition to the code they name. Nine languages: C#, Go, Java, Kotlin, Rust, Perl, TypeScript/JavaScript, PHP and C (#2550, #2593).
  - Markdown, reStructuredText/Sphinx, AsciiDoc/Antora and PDF documents link their sections to the code they reference (#2551).
  - To list every section that names a definition, run `trace_path` inbound over `MENTIONS`.
- **Architecture decisions become nodes.** ADR files become `ADR` nodes carrying their status, date, deciders and the decision itself. A record that says "Supersedes ADR-3" gets a `SUPERSEDES` edge (#2551).
- **Diagrams and API specs enter the graph.**
  - Mermaid, PlantUML, Graphviz, D2, draw.io and Excalidraw diagrams become `Diagram` and `DiagramElement` nodes joined by `DIAGRAM_ARROW` edges, whether embedded in a document or standing on their own.
  - Each OpenAPI/Swagger operation becomes a `Route` node with the same identity as the route your code registers (#2593).
- **Smart CI, driven by the graph.**
  - `detect_changes` with `scope: "tests"` answers which tests a change can reach and why. Incomplete evidence becomes a "run everything" answer that names its reason (#2458).
  - The new walk parameters `edge_types`, `fixpoint` and `via` expose the same dependency walk for any repository (#2458).
- **From Service to code.** `trace_path` in `run` mode walks Service → workload → Image → Dockerfile → program, together with the container's environment. A `deploy` mode follows what deploys what, and a `topology` mode what references what (#2597).
- **A sharper code graph.**
  - C and C++ get typedef nodes, distinct macro and enumerator identities, and member access resolved through the object's type (#2543, #2458).
  - A definition written once per `#if` branch, `#[cfg]` or Go build tag is now one node; C/C++ platform files (`src/unix/`, `src/win/`, `arch/x86/`, ...) keep their own path-named nodes, related by a shared `variant_key` that Smart CI follows (#2458, #2630).
  - Process launches become `SPAWNS` edges in about 30 languages (#2458).
  - Doc comments are captured whole: Go full-doc capture rose from 35% to 99.999% and C# from 10% to 99.8% (#2459).
- **Long indexes survive client deadlines.**
  - Pass `index_repository(async: true)` to start an index in the daemon and get control back at once, then poll with `status: true` (#2357).
  - `index_status` now tells you whether a project is actually being watched, and why not if it isn't (#2348).
- **Observed vs. possible.** `ingest_traces` now really stores the runtime call paths you send it. Lens marks the hops that actually ran (#2068).

## CBM Lens Beta (#2068)

The MCP tools are the agent's interface to the graph. **CBM Lens Beta** is yours: our attempt to bring the power of the code knowledge graph to humans. It replaces the previous graph UI and is built into the binary:

```bash
codebase-memory-mcp --ui=true --port=9749
```

- **Explore:** follows the current file or marked source, with its direct dependencies and a file-level impact summary from graph and local Git evidence.
- **Galaxy:** search nodes, files and folders, then expand incoming or outgoing relationships by depth and edge type.
- **Architecture:** the repository map, routes, hotspots, system structure and behavior.
- **Coverage and System:** what the index missed and why, plus daemon status, indexes, diagnostics and MCP configuration.
- **ADR:** edit the project's decision document in the browser, shared with `manage_adr`.
- **Add project index (Alt+P):** pick a local repository, name it and follow the daemon's progress.
- **Local chat:** ask about the code you have selected. Inference runs in your browser. Model weights are not bundled; they download from Hugging Face only when you activate a model.
- **Runtime evidence:** call paths sent through `ingest_traces` are stored, and Lens marks the hops that actually ran.

Lens runs on loopback, keeps source files read-only, and names where each fact comes from. Frontend errors are journaled on the server, so a bug report can include them.

CBM Lens is built on the work of @BernhardJackiewicz on the CBM read surface, contributed with the author's agreement (design and tracking in #1964). @BernhardJackiewicz now owns the UI subsystem. Thank you, @BernhardJackiewicz. This release would look very different without your work.

## Documentation in the graph

**Doc-comment links (#2550, #2593)**

- C# `<see cref>`, `<seealso cref>`, `<exception cref>` and `<inheritdoc cref>` bind by the compiler's own lookup rules, including MSBuild global usings evaluated from your project files (#2550).
- Go doc links, Javadoc and KDoc tags (`{@link}`, `@see`, `@throws`, `{@value}`, `@sample`), Rust intra-doc links, Perl POD `L<>`, TypeScript/JavaScript `{@link}`, PHPDoc `@see` and Doxygen `@ref`/`@see` follow the same rule (#2593).
- Each of the 17 doc-comment link families that ship in #2593 passed a blind audit on repositories never used to build it (bar: Wilson 95% lower bound ≥ 0.90).
- Families still below the bar resolve but stay out of the graph, for example TS/JS `{@linkcode}` and `@see`, diagram links and OpenAPI `operationId` links.
- `index_status` gains a `doc_links` block: the `MENTIONS` count, plus unresolved references counted by reason (`missing`, `ambiguous`, `external`, …). Pass `diagnostics='full'` for samples.

**Documents (#2551)**

- **Markdown:** sections link to the code they name through links, bare paths, and code spans holding paths or qualified names. A line range such as `#L3-L9` binds the innermost definition that holds it. A bare name is never an edge.
- **reStructuredText / Sphinx:** a `Section` per title, with links from roles (`:class:`, `:meth:` …), object directives, `autodoc`, `literalinclude` and inline literals. Python names resolve the way Sphinx imports them. `conf.py` is read as text, never executed.
- **AsciiDoc / Antora:** sections link through `include::` directives and tag regions.
- **PDF:** every page becomes a `Section` whose text is searchable, linked to the paths, file names and qualified names it mentions. The extractor is dependency-free and built for untrusted input: 44,070 seeded mutant PDFs ran under ASan and UBSan with zero findings. Encrypted documents are reported as such.
- **ADRs:** detected in Markdown and reST. Their facts come from front matter, header fields or the Status section.
- Markdown file-to-file references also become `REFERENCES_FILE` edges, so documentation hubs show up in fan-in queries (#1832, thanks @cdeust).

**Complete doc comments (#2459).** Multi-line `//` and `///` runs, docs above attributes and exports, field and enum-member docs, Go package comments and Perl POD are now captured in full, with no 500-byte cut. Full-doc capture on real corpora:

| Language | Before | After |
|---|---|---|
| Go | 35% | 99.999% |
| C# | 10% | 99.8% |
| Rust | 7% | 99.9% |
| Java | 74% | 99.99% |
| TypeScript | 42% | 100% |

**Doc-section candidates (#2574).** Documentation often explains a function without naming it. For those sections, `get_code_snippet` now lists `possibly_about` candidates (on a section) and `possibly_described_in` candidates (on a function). Each candidate carries a probability judged on blind samples. They are leads for an agent to verify, not edges: at best about half are right, and the tool says so. `get_file_outline` lists the sections that are likely about a file.

## Diagrams and OpenAPI (#2593)

- **Supported formats:**
  - Mermaid: flowchart, sequence, class, ER, state, C4, architecture
  - PlantUML, Graphviz DOT and D2
  - draw.io: plain, compressed and `.drawio.svg`
  - Excalidraw: `.excalidraw`, `.excalidraw.json` and `.excalidraw.svg`
- **Embedded or standalone:** diagrams are read in Markdown fences, reST directives (`.. mermaid::`, `.. uml::`, `.. graphviz::`), Asciidoctor diagram blocks and diagram files of their own. `.drawio.svg` and `.excalidraw.svg` files are no longer skipped as images.
- **Labels, not syntax:** a Markdown section that embeds a diagram keeps the diagram's labels in its searchable text instead of its syntax (`-->`, `participant`).
- **OpenAPI and Swagger:** `openapi.json`, `swagger.json` and any YAML or JSON file whose root declares `openapi`/`swagger` contribute one `Route` per operation. The spec's route and the route your code registers meet in one node.

## Smart CI: the graph picks the tests (#2458)

Running every test for every change is slow and expensive. A hand-written rule for which tests to skip is guesswork. In this release, the graph decides.

- **Test impact from the graph.** `detect_changes` with `scope: "tests"`:
  - pins the change, from the merge base to `HEAD`;
  - seeds the graph from the changed hunks;
  - walks everything that depends on them, over calls, references, reads and routes, and through header includes and their macros.

  The tests, suites and runner entry points at the end of those paths are the answer, each with how it was reached.
- **Never a silent miss.** Missing or doubtful evidence never narrows the selection. An unparseable change, an unmapped test, or a reached test-runner `main` turns the answer into "run everything", with the reason named.
- **Walk parameters for every repository.** `detect_changes` takes `edge_types`, `fixpoint` and `via`. Any project can ask for the full inbound dependency closure of a change and see the path to each hit.
- **Team bundles.** `codebase-memory-mcp test-impact publish|select` packages a commit's frozen graph and its per-test coverage map as a bundle. A pull request's selection then starts from the bundle of its merge base instead of indexing from scratch.
- **Dogfooded.** codebase-memory-mcp's own pull requests run only the test lanes their change touches; dry runs and releases still run everything. The graph's test selection also runs as a report-only shadow on every PR. That builds the record we need before it narrows test runs by default.

> Today the test model knows codebase-memory-mcp's own C test runner. For other test runners, `scope: "tests"` answers "run everything" until their conventions are mapped. The walk parameters work everywhere.

## Infrastructure as code in the graph (#2597, #2643, #2644)

The pieces of an infrastructure graph existed before; now they chain. We measured on 17 open-source infrastructure repositories, from kubespray and cluster-api to opentelemetry-demo. On them, a Service can be walked to the code its container runs:

```
Service → Deployment → Image → Dockerfile → main()
                     └ the container's environment variables
```

- **Kubernetes:**
  - Every manifest document is an object with a stable identity.
  - Objects link to the ConfigMaps, Secrets, ServiceAccounts and volumes they name, and to their Flux, Argo CD, Cluster API and cert-manager references.
  - A Service links to the pods its whole selector selects.
- **Helm:** templated manifests become objects too, chart templates link to the named templates they include, and `file://` chart dependencies resolve.
- **Deploy chains:** `DEPLOYS` edges come from:
  - Flux Kustomizations and HelmReleases, and Argo CD Applications;
  - `kubectl apply`, `kustomize build` and `helm install|upgrade|template` in scripts and Makefiles;
  - Terraform `helm_release`, and Go installers that use the Helm SDK.
- **Build and run:**
  - Dockerfiles depend on the images they build from, and `SPAWNS` links each to what its container runs.
  - A new `Image` label joins workloads, Compose services and build commands to the Dockerfile that builds the image.
  - Scripts and CI jobs (GitHub Actions, Prow) link to the scripts and programs they run, and `make TARGET` to its rule.
- **Environment, without values:** each variable a container sets becomes that container's own `EnvVar`. Values are never stored, and secret material never reaches the graph.
- **Tools:** `trace_path` gains the modes `run`, `deploy` and `topology`; `search_graph` filters infrastructure by kind and namespace.
- **Fixes along the way:**
  - A comment before a manifest no longer hides it.
  - Extensionless `Kustomization` files are found.
  - OpenTofu `.tofu` and `.tfvars` files are indexed.
  - Route `HANDLES` edges no longer depend on worker order (deckhouse: 6,424 → 44, the false ones gone).
- **Checked independently:** an independent reader checked every layer on all 17 repositories. Recall and precision were 100% on the gated scope.
- **Kustomize, Terraform and Ansible join the chain (#2643, #2644):**
  - Kustomize patches, `helmCharts` and `namePrefix`/`nameSuffix` variants link to the objects they change or deploy (`OVERRIDE`, `DEPLOYS`).
  - A container's environment variables reach the code inside its own image that reads them (`CONFIGURES`). Workloads and Compose services `CONNECTS_TO` the Service their environment addresses, and `curl`/`wget` in scripts, Makefiles and CI make `HTTP_CALLS` to Routes.
  - Terraform, OpenTofu and Terragrunt: `var.`, `local.`, `module.`, `data.` and resource references link to the block that declares them; local modules are `IMPORTS`, `.tfvars` files `OVERRIDE` their variables, and Terragrunt `include`/`dependency` are linked. `kubernetes_*` resources become the same objects as manifests.
  - Ansible: playbooks, task files and roles link by `IMPORTS`; tasks and handlers are functions, `notify` calls the handlers it names, and `kube`/`k8s` tasks `DEPLOYS` the template they apply.
  - External Helm charts are identified by the URL that publishes them: one shared node per published chart across projects. A chart without a stated URL stays per project, and a URL carrying a token or credentials never becomes part of a node.
  - TOML and INI config keys link to code only by exact name and inside the config file's component, which removes coincidental `CONFIGURES` edges.
  - A hand-checked sample of the new edges was 849 of 850 correct.

## A sharper code graph

**C and C++**

- **Typedefs and macros (#2543):**
  - Typedefs become nodes, and anonymous `typedef struct/enum {…} X;` aggregates are named after their typedef.
  - A `#define NAME` no longer replaces the function or type called `NAME`; macros get their own `<module>.<NAME>#macro` identity.
  - Functions behind an unknown leading macro keep their real name.
  - Measured: redis gained 573 `Type` nodes and curl 193; functions previously lost to a same-named macro were restored (45 on redis, 41 on curl).
- **Member access (#2458):** `a.b` and `a->b` bind the field of the object's actual type. When the type is unknown, they bind only a member name exactly one struct carries. On this project, the share of C field uses that land on a struct the file actually names rose from 58.1% to 97.6%.
- **Conditional definitions (#2458):** one node per definition that exists once per `#if` branch, `#[cfg]` or Go build tag, with every variant's span kept in a `variants` property. Definitions inside conditional blocks are now extracted for C++, C#, Objective-C, Elixir, Fortran and Haskell.
- **Platform variants (#2630):** a C/C++ function defined once per platform file or directory (`src/unix/fs.c` and `src/win/fs.c`, `arch/x86/...` and `arch/arm64/...`) keeps one node per file under its own path, so every implementation is findable by its path. The variants share a `variant_key` property, and Smart CI treats a change in any variant as reaching the tests of all of them.
- **One definition per site in macro-heavy C/C++ (#2626, #2629):** where the raw and the macro-expanded parse disagreed about a definition's scope or spelling, both copies used to land in the graph (e.g. `bitonic<int64_t, AVX2>` and `bitonic < int64_t , AVX2 >`). Each definition is now one node with one spelling: on dotnet/runtime the duplicate definitions drop from 545 groups in v0.11.0 to 185.
- **Calls across files (#2466):**
  - `Class::member` calls resolve across files, including `X::instance()->m()` and `auto w = Widget::create(); w->m()`.
  - qBittorrent gained 489 correct `CALLS` edges.
- **Export macros (#2005):** type definitions hidden behind export macros are recovered (thanks @XIYBHK).
- **Return types (#2274):** a C-family function's return type keeps its pointer and qualifiers.
- **Macro-wrapped definitions (#2450):** `void FNAME(first)(void)` and `void Cls::__API_HOOK(Spawn)()` are named after the macro's argument (`first`, `Spawn`). Every definition one wrapper macro generates used to share a single node (#946, #1957).

**Across languages (#2458, #2227)**

- **`SPAWNS` edges.** `subprocess.run`, `exec.Command`, `child_process.spawn`, `posix_spawn`, `Process.Start`, `Command::new` and their kin in about 30 languages now point to a `Process` node named after the program. Previously these were guessed `CALLS` edges.
- **No cross-language name guesses.** A name-only match never binds a symbol defined in another language, and config languages (Makefile, CMake, YAML) no longer bind into code.
- **Bash imports** are the files a script sources, not every command it runs.
- **A file and a folder with the same stem both stay (#2624).** `genproto.sh` next to `genproto/` used to share one qualified name, and the file's Module was dropped together with the edges pointing at it. The folder is now spelled `proj.pkg.genproto/`; where the directory is a Java or Go package, the folder keeps its name and the file's Module becomes `proj.pkg.genproto#sh`. Symbol names do not change. On 17 infrastructure repositories, 27 lost Modules → 0.

**Language by language**

- **C#:**
  - Same-named types bind by declared namespace, `using` and aliases: dotnet/runtime gained 8,338 `CALLS` edges (#2347).
  - Collection expressions in conditionals now parse (#2329).
- **Java, C# and Solidity:**
  - Each class field becomes one `Field` instead of an extra `Variable` (#2551). On junit-framework, 6,938 usages now reach the right field.
  - A field that shares its name with a method of its class keeps both nodes.
- **TypeScript:**
  - Constructor parameter properties and `new`-initialized fields resolve (#2523).
  - Imported class receivers resolve across files (#2407).
  - Awaited generic calls keep their edges (#2242, thanks @lorenzozanee).
- **Python:**
  - Typed fields resolve across files (#2498).
  - An external import is never bound to a same-named project symbol (#2345).
  - `self.`/`cls.` attribute calls keep their targets (#2227).
  - IRIS `iris.cls("Pkg.X").Method()` resolves to the named class (#2367, thanks @isc-tdyar).
  - Module-level calls join the exact LSP resolution (#2525), and class-body and decorator calls resolve (#2529).
  - A package's symbols are scoped apart from its `__init__` file's identity (#2528).
- **Overrides:** resolved through the nearest declaring ancestor (#2514).
- **PHP:**
  - PSR-4 imports resolve to the exact class file (#2509).
  - A namespaced `use` binds only through namespaces the project declares, so a vendor import no longer binds an unrelated project symbol (#2515).
  - Proven vendor types stay out of project name fallbacks. Calls on vendor clients such as Guzzle are classified by the vendor method the resolver proved (#2520, #1186).
- **Pascal/Delphi:** identifiers with non-ASCII letters parse cleanly (#2356, #2211).
- **Rust:**
  - A std-typed receiver never binds a same-named project method (#2339).
  - `cfg`-fenced functions are reachable by their bare name (#2370, thanks @BobbieBarker).
- **Go:** cgo's `import "C"` no longer creates false imports (#1931, thanks @ilyabrykau-orca).
- **Dart:** extension declarations and their members are indexed (#2321).
- **Resolution ties:** ties no longer depend on worker order. They prefer functions and methods over same-named fields, and C# implementations over reference-assembly stubs (#2227, #2578).

**Routes and HTTP**

- **Laravel:**
  - the Laravel 11+ `withRouting` api prefix (#2447)
  - array and invokable controller actions (#2465)
  - routes without a leading slash (#2471)
- **NestJS** `@Controller`/`@Get` (#2320) and **FastAPI/Starlette** WebSocket routes (#2258).
- **GraphQL** routes keyed by operation name (#2495).
- **JAX-RS** relative `@Path` templates and Scala class-level paths (#2158, thanks @htarnacki).
- **Go** router group prefixes (#2497).
- **axios:** `axios.create` base URLs (#2332), capitalized `Axios` clients (#2463), request-config objects (#2354), and no duplicate edge for a typed HTTP call (#2462).
- **Swift:** `URL(string: "…")!` requests (#1976, thanks @CaptainMittens).
- **Import aliases:** calls through an import alias of an HTTP or messaging library are recognized, e.g. `import { get as navigate } from 'axios'` and `from paho.mqtt import publish as send`. An aliased HTTP call needs a request verb such as `get` or `post`, so URL helpers like `urljoin` never become requests (#2513).
- **Client-side navigation** is no longer inferred as an HTTP call (#2519, #1250).
- **Topic identities** survive the folding of local URL constants (#2513, #706, #1147).
- **Fewer false routes:**
  - document and log paths (#2255)
  - decorators without a path (#2254)
  - library ids matched mid-identifier (#2273)
- Route registrations survive the cross-language guard (#2464). Cross-repo links skip calls a service serves itself (#2319).

**Deterministic and complete**

- No clock decides what ends up in the graph. The AST walk no longer stops at a time budget; a C# corpus that produced a different edge count on each run now produces the same graph every time, with about 550 more edges (#2233).
- Indexing while results are parked on disk under memory pressure produces the same graph as indexing in memory (#2233).
- `#include` targets and resolution ties no longer depend on worker merge order (#2227).
- Every file parses as if its last line were terminated. A trailing heading, fence or Makefile recipe is no longer lost (#2340).
- AST walkers grow instead of silently capping deep or wide bodies (#2375, #2373).
- Truncated walks are reported in coverage instead of passing as fully indexed (#2233).
- Small repositories, indexed on the sequential path, now carry the same call arguments on HTTP and async edges as large ones on the parallel path. The graph no longer depends on which path ran (#2520).
- **File coverage:**
  - .NET project files (`.csproj`, `.props`, `.targets`, `.resx`, XAML, app manifests) are indexed as XML (#2230, thanks @yasmoradi).
  - A git-less subfolder honors its enclosing repository's `.gitignore` (#2181, thanks @AmirF194).
  - A `.gitignore` never hides a file Git tracks, matching Git's own rule (#2608).
  - Laravel's compiled Blade view cache is skipped (#2325).
  - Binary ReScript `.res` resources no longer hang the indexer (#2352).
  - Large SQL dumps parse cheaply (#2326).

**Semantic relations you can weigh (#2574)**

- Every `SEMANTICALLY_RELATED` edge now carries `p`, the probability that a reader judges the pair related, calibrated on blind-judged samples.
- Admission is best-first instead of first-come.
- TF-IDF compares vocabulary instead of token positions.

## MCP tools

- **`index_repository`:**
  - `async: true` and `status: true`, as described above (#2357). A cut-short synchronous call suggests async mode on the next call.
  - Failures now say what happened, for example `aborted_previous_preserved` (the old index keeps serving) or `persist_failed` (#2068).
  - `doc_candidates` switches the documentation pass for one index: on by default for full indexes, off for `moderate` and `fast`; `true` or `false` overrides either way (#2610, #2628).
- **`index_status`:**
  - a `watch` object with `watched` and the `strategy`, or the `reason` it is not watched (#2348)
  - the `doc_links` block (#2550)
  - a `cross_repo` run status that tells "never linked" apart from "linked, nothing matched" (#2346)
- **`detect_changes`:**
  - `base_branch` defaults to the repository's real default branch: `origin/HEAD`, then `main`, `master` or the upstream (#2496).
  - Works for projects that live in a subdirectory of their Git repository (#2334).
  - The blast-radius walk can follow the edge types you choose (`edge_types`), walk to closure (`fixpoint`), report the edge each symbol was reached through (`via`), and list the changed symbols themselves with `seeds: "list"` and `seed_filter: "product"` (#2458).
- **`ingest_traces`:** records call paths or caller/callee pairs per run label, keyed by qualified name so they survive reindexing. It reports unresolved names so the producer can fix them, and is now correctly marked as writing (#2068).
- **`get_architecture`:** new `system_structure` aspect, with `include_behavior_evidence` for indexed call arguments, parameters and return types (#2068).
- **`get_code_snippet` / `get_file_outline`:** doc-section candidates, as described above (#2574).
- **`search_graph`:** the full-text path honors the `label` filter and ranks an exact-name definition above test methods that repeat the token (#2227).
- **`search_code`:**
  - `context` is bounded to 0–200 lines (#2474).
  - An unusable `path_filter` is reported as an error instead of being dropped (#2475).
  - Empty results no longer suggest misleading filters (#2524).
- **`query_graph` (Cypher):**
  - `WITH` carries the real node (#2351).
  - `DISTINCT` counts against the row cap (#2511).
  - Early `WHERE` pruning no longer drops rows it cannot judge yet (#2253).
  - `COUNT` ignores unbound `OPTIONAL MATCH` values (#2241, thanks @lorenzozanee).
  - Non-numeric `SKIP`/`LIMIT` is rejected (#2002, thanks @metehanulusoy).
  - Single-hop patterns seed from their selective end (#2227).
  - Long `AND`/`OR`/`XOR` chains and many `UNION` branches are walked in loops, so a 50,000-operand `WHERE` no longer overflows the stack (#2477).
- **Finding projects:**
  - A directory argument resolves to its owning project (#2446).
  - Underscore-prefixed (#2526) and non-ASCII (#2331) project names are discovered.
  - An unnamed re-index reuses the project that owns the root (#2344).
- **Cross-repo:**
  - An index built before the #768 schema is skipped with a hint instead of aborting `["*"]` (#2343).
  - Zero resolved targets is an explicit failure (#2318).
- **Error reporting:**
  - `check_index_coverage` freshness works on Windows (#1787, thanks @umi008).
  - A failed `COUNT` read reports an error instead of "empty" (#2065, thanks @kavish-19).

## CLI, install and clients

- **`uninstall` keeps your indexes by default.** Pass `--delete-indexes` to remove them (#2517).
- **Your settings are safe from index cleanup.** `install --reset-indexes` and `uninstall` no longer delete your settings (`_config.db`) or the cross-repo store along with project indexes (#2405).
- **Other installs leave your daemon alone.** An install or update run under another `HOME` or cache never stops a daemon it cannot confirm as its own; it names the daemon and how to stop it (#2412).
- **One install path.** The setup scripts now install through `install.sh` / `install.ps1` (#2480).
- **Index resource limits.** New opt-in `index_max_files` and `index_max_source_mb` settings stop an oversized discovery before it publishes a partial graph. The serving index is kept (#1723, thanks @liuchong).
- **Watching more.** The new opt-in `watch_non_git` setting polls project roots that are not Git repositories (#2333). A project whose index keeps failing is retried with backoff instead of every poll (#2075, thanks @halindrome).
- **Clients:**
  - better detection of OpenCode, Hermes and Claude Code (#2468)
  - OpenCode V2 plugin format (#2089, thanks @AmirF194)
  - migration of v0.10.8 OpenCode agent profiles (#2393)
  - adopting the Codex MCP table after Codex rewrites it (#2324)
  - Codex hook paths with spaces (#2338)
  - Hermes hook edits that leave unrelated YAML alone (#2355)
  - foreign TOML tables kept between managed markers (#2467)
  - trusted Linux system aliases during activation (#2203, thanks @DavidHLP)
  - Pi extension schemas in TypeBox (#1809, thanks @Sakil786)
- **CLI help:**
  - `cli --help` points to `--format json` (#2140, thanks @Lowpower).
  - Array arguments accept a JSON array literal (#2227, #2160, thanks @htarnacki).
  - `update` names the step and the OS error when it fails (#2589).
  - `cli list_projects` with no arguments no longer waits on a stdin pipe nobody closes (an ssh session, `child_process.spawn` without `stdin.end()`). JSON piped into `list_projects` is no longer read; flags, `--args-file` and `< args.json` are (#2633).
- **Daemon messages that help:**
  - a build conflict names the conflicting daemon and the way out (#2392)
  - a refused WSL `/mnt/<drive>` cache names the DrvFs fix (#2322)
  - a cache path through another account's directory names that directory and its owner, and network filesystems get a warning (#2323)
- **Startup:**
  - A second, byte-identical copy of the binary (another install path, a package-manager copy) now connects: 4.9 s the first time, then 1.4 s, where it used to give up after ~35 s (#2335).
  - `CBM_STARTUP_TIMEOUT_MS` widens the daemon startup budget on loaded hosts (#2068).

## Performance and memory

- **Faster indexing across the board.** On ten benchmark repositories, one per LSP language, a full index of this release beats v0.11.0 everywhere. Medians of three runs on an Apple M5 Pro:

  | Repository | v0.11.0 | v0.12.0 | Change |
  |---|---|---|---|
  | Perl | 7.0 s | 1.1 s | −84 % |
  | PHP | 7.4 s | 1.7 s | −77 % |
  | Rust | 8.0 s | 1.9 s | −76 % |
  | C | 9.2 s | 3.0 s | −67 % |
  | Go | 45.2 s | 18.6 s | −59 % |
  | Kotlin | 11.0 s | 4.7 s | −57 % |
  | Python (django) | 11.9 s | 6.0 s | −50 % |
  | TypeScript | 33.9 s | 21.6 s | −36 % |
  | C# | 132.0 s | 120.8 s | −8 % |
  | Java | 76.0 s | 72.0 s | −5 % |

  Peak memory is lower on nine of the ten, and every repository produced the same graph on every run.
- **The Linux kernel, indexing time with and without the documentation pass.** [Documentation in the graph](#documentation-in-the-graph) adds one new indexing step: every documentation section is scored against the code to find the functions and files it is about. It runs by default for full indexes (the default mode) and not for `moderate` or `fast` ones; `doc_candidates` switches it on or off for any mode.

  | Linux kernel, full index | v0.11.0 | v0.12.0 |
  |---|---|---|
  | code graph only | 236 s, 21.3 GB peak | 225 s, 14.3 GB peak |
  | code graph + documentation pass (default) | n/a | 396 s |

  On repositories below about 100,000 functions the documentation pass costs about a second or less.

- **Query tools answer fast, on every platform (#2642).** On macOS and Linux every response is byte-identical to before; only the time changed.
  - `search_code` scans the indexed files in process instead of through grep or PowerShell. On django a default search fell from 908 ms to 355 ms and a wide one from 3.8 s to 0.7 s. On Windows on Arm a search fell from 1.6-3.4 s to 0.2-0.5 s; on GitHub's Arm runners the PowerShell scan had needed up to 31 s per call, against a 30 s scan limit. Windows now also matches exactly like macOS and Linux (see [Breaking changes](#breaking-changes)).
  - `query_graph` sorts, deduplicates and groups in O(n log n) instead of O(n²). Over django's 29,000 methods, `WITH ... ORDER BY` fell from 41 s to 62 ms, `RETURN ... ORDER BY` from 2.2 s to 50 ms and `WITH DISTINCT` from 18 s to 56 ms.
  - Read tools run their graph lookups in one SQLite read transaction, renewed every 100 ms, instead of locking the database file once per lookup. A whole-graph `count(*)` fell from 508 ms to 184 ms, and on Windows, where file locks cost more, from 2.9 s to 0.39 s.
  - On a kernel-scale graph (the Linux kernel: 8.5 million nodes, 16.9 million edges):
    - `trace_path` and the degree filters of `search_graph` walk an in-memory adjacency index, built once per index version (1.2-1.5 s on the kernel) and charged to the memory budget; an idle one is released after 10 minutes. `trace_path` from `schedule` fell from 7.5 s to 22 ms, a hub search from 4.2 s to 0.17 s.
    - `query_graph` streams its rows instead of holding every match in memory. A whole-graph `count(*)` used to peak at 24.9 GB and stop at the query time limit; it now answers in 11 s within 289 MB.
    - `get_architecture` fell from 9 s to 0.9 s, and an exact or prefix name search from 1.1 s to 14 ms.
    - `search_code` fell from 11.8 s to 3.4 s.
  - Re-indexing an unchanged repository no longer copies the whole database first. On the kernel that took 18.4 s and wrote 19 GB; it now takes 2.4 s and writes nothing (django 841 ms to 539 ms).
  - `list_projects` asks git only for the branch it shows: two git calls per project instead of seven (94 ms to 40 ms with one project, and the saving grows with every project).
- **Faster startup on every invocation.** SHA-256 now runs on ARMv8 SHA2 and x86 SHA-NI instructions. The hook path's session start dropped from 1.448 s to 0.376 s on Apple arm64, with identical digests (#2575).
- **Far less disk churn on incremental updates.** A one-line edit on a 294 MB django index wrote 5.2 GiB to the SQLite WAL; it now writes 0.52 GiB (#2469).
- **A memory budget that respects the machine.**
  - The budget is now sized from free memory, not just total RAM: a kernel index on a busy 48 GB host finishes instead of exhausting it.
  - Spilling to disk never starts below 10 GB free.
  - Spill files disappear even if the process is killed (POSIX).
  - Orphaned staging databases of every project are reclaimed (#2233).
- **Leaner allocation.** On the Go corpus, allocations fell from 245.5 M to 134.8 M, with graph output unchanged (#2233).
- **Lower macOS memory footprint.** Index workers on macOS return purged memory so the footprint the OS charges falls, with a byte-identical graph (#2581).
- **Algorithmic fixes:**
  - LSP surfaces decode in linear time (#2288, thanks @JosephStarobinets).
  - Python scope-chain lookups are collapsed into one pass (#2252, from work by Andrew Hundt).
  - Doc-section scoring is exact and cheaper (#2582).
  - Repeated resolver work is bounded without truncating large files. A file that reaches the bound is reported as incomplete instead of silently partial (#2522, #1527).
  - Python submodule probes and class and wildcard scans no longer walk the whole registry (#2532, #2535).

## Platforms

- **Windows:**
  - Unicode repository paths (#1816, thanks @z2250389)
  - persistence artifacts under CJK paths (#2461)
  - aligned allocations stay on mimalloc (#2260)
  - worker-recovery (#2282) and `mkstemp` (#2362) errors are preserved (all three thanks @knewstimek)
  - the watcher sees two edits within the same second (#2068)
  - a lost runtime-directory race is not a failure (#2275)
- **ARM and x86:** hardware SHA-256 on Apple silicon, Linux and Windows on arm64, and x86 CPUs with SHA-NI (#2575). Linux arm64 builds with GCC 11 again (#2603).
- **Linux, HPC and WSL:** clear guidance for shared and network filesystems and WSL drives (#2323, #2322), documented in `docs/CONFIGURATION.md`.
- **Scoop:** the packaged manifest gains arm64 (#2301, thanks @ivanlinhf).

## Reliability

- **Large indexes no longer corrupt.** The bulk SQLite writer could end a B-tree level with an empty interior page on large graphs with long keys; SQLite then reported the database as malformed. Fixed (#2330).
- **Settings database (#2650):**
  - Fixed a startup race on the settings database: `daemon start --port`, `--ui=true --port` and other commands could fail with "the daemon did not accept the UI configuration" or "could not load saved runtime settings" while another process was writing settings. They now wait for that write to finish, and starting the daemon no longer rewrites unchanged UI settings.
  - Fixed a recovery gap: after a process was killed in the middle of a settings write, every later command failed with "could not load saved runtime settings" until the settings database was repaired by hand. Startup now rolls back the interrupted write and continues.
- **Fewer concurrency and data-loss bugs:**
  - Concurrent first reads of an idle database no longer race (#2561).
  - A failed atomic publish logs why (#2259, carried from work by @junk151516).
  - An index worker that exits without answering is named (#2494).
  - Edge ids stay unique after a parallel phase. A lowered id counter had handed some out twice, which deleting a node could turn into a dangling reference (#2607).
- **No more redirected Git.** cbm's own Git commands ignore repository-redirecting variables (`GIT_DIR`, `GIT_WORK_TREE`, …) inherited from hooks and editor terminals (#2341).
- **Memory-safety fixes:**
  - an uninitialized read in the WIT grammar scanner, surfaced by MemorySanitizer (#2596)
  - a read of an unwritten byte in reST section text (#2583)
  - a `trace_path` leak (#2425)
  - a leak when a Cypher `MATCH` pattern fails to parse (#2603)
  - an over-long call argument overran its 512-byte formatting buffer, and deeply nested syntax could exhaust the stack; both walkers are now bounded and iterative (#2478)

## Security fixes

- **`search_code`:** drops matches from indexed paths that now resolve outside the project root through a directory link (#2491).
- **Links and roots:**
  - The tsconfig/jsconfig path-alias scan no longer follows links or junctions out of the repository (#2489).
  - Workspace manifest entries are judged by the directory they actually resolve to (#2490).
  - The home directory is recognized through links (#2479).
- **Resource limits:**
  - Regular expressions are sized before compiling, and oversized patterns are refused with an error (#2475).
  - `search_code` context and Cypher result sizes have hard ceilings (#2474).
  - Integer arguments outside the 32-bit range fall back to their default instead of wrapping (#2256).
- **Package wrappers:** the npm and PyPI wrappers enforce the same download and extraction size limits as the Go wrapper (#2473).
- **Child processes:** spawned processes close every inherited descriptor using `close_range`/`closefrom` where available (#2510).
- **Cypher:** a heap buffer overflow in `OPTIONAL MATCH` relationship joins is fixed (#2445).
- **CBM Lens (#2068):**
  - The UI's RPC endpoint serves only read-only query tools; `manage_adr` is limited to its read modes there, and the server stays loopback-only.
  - Git history queries refuse network transports.
  - The page's content security policy allows only loopback, plus Hugging Face for opt-in model downloads.
- **Windows installer:** `install.ps1` reserves its staging directory and its temp file exclusively, instead of adopting a path someone else created first (#2251, from work by Andrew Hundt in #1245).
- **Build tooling:** the PyPI publish toolchain moved to urllib3 2.8.0 for three upstream advisories. The shipped binaries are not affected (#2451).
- **CBM Lens dependencies:** the UI's npm dependencies move past all 17 open Dependabot advisories: adm-zip 0.6.1, DOMPurify 3.4.16, yaml 2.8.3 and source-map-js 1.2.2, and sprintf-js (no fixed release) leaves the dependency tree (#2632).
- **No LGPL code in the UI's dependency tree:** sharp, which Transformers lists only for its Node image path and which CBM Lens never uses, is replaced by an empty stand-in. Its LGPL libvips binaries leave the tree, and the license gate now checks every package, platform-specific ones included, with no exceptions (#2635).

## Upgrade notes

- **One full rebuild per project.** This release changes how C macros, enumerators and fields are identified. It also adds the documentation layer and the infrastructure graph, which moves the index format from 1 to 2. An index written by v0.11.0 or earlier is therefore rebuilt in full, once, the next time it is indexed (#2543, #2550, #2551, #2574, #2597, #2643).
  - Until then, the old graph keeps answering, and `index_status` points out that the index predates doc links.
  - On a large repository, plan for the time of a first index.
  - Your project's ADR document carries over.
  - Coming from v0.10.x? The index-format boundary introduced in v0.11.0 (#1104) is covered by the same single rebuild.
- **Terraform and Ansible edits re-index in full.** A changed Terraform or Ansible file takes a full re-index instead of an incremental one, so cross-file edges never go stale (#2643).
- **Re-run cross-repo linking.** A rebuild drops `CROSS_*` edges and their status together, so run `index_repository(mode="cross-repo-intelligence")` again for linked projects.
- **Indexes cover more files.** PDF, AsciiDoc, diagram files, OpenAPI specs, .NET project files and Sphinx `.txt` sources are now read, and the documentation layer adds its own tables. Documentation-heavy repositories get larger indexes.
- **Very large repositories: the documentation pass and `doc_candidates`.** Scoring the doc-section candidates (#2574) is the largest extra indexing cost on very large repositories. It runs by default for full indexes and not for `moderate` or `fast` ones. On the Linux kernel it adds about three minutes; on repositories below about 100,000 functions, about a second or less. `codebase-memory-mcp config set doc_candidates false` turns it off for every mode (`true` turns it on for every mode), and `index_repository(doc_candidates: ...)` does the same for one index. The code graph is unchanged either way; only the `possibly_about` / `possibly_described_in` leads are left out. With it off, the kernel indexes faster than with v0.11.0 (#2610, #2628).
- **Watcher scope, stated precisely.** The background watcher follows the project each open MCP session is rooted in. A repository indexed from the CLI or from another project's session is not watched. Nothing changed here, but `index_status` now says so (#2348).
- **New opt-in settings** (all off by default):
  - `watch_non_git`
  - `index_max_files`
  - `index_max_source_mb`
  - `CBM_STARTUP_TIMEOUT_MS`
  - `CBM_WALK_MAX_NODES` (restores a node cap on the AST walk if you want one)
- **The previous graph UI is replaced by CBM Lens Beta.** It is still started with `--ui=true`.

## Breaking changes

- **Some qualified names changed** (#2543, #2551, #2458). Update saved queries and tools that store these names.
  - C-preprocessor macros are now `<module>.<NAME>#macro`.
  - Enumerators of C enums and unscoped C++/Objective-C enums live in their enclosing scope.
  - A class field that shares its name with a method of the same class is `<Owner>.<name>#field`.
  - Rust `#[cfg]` twins are one node instead of `name#cfg(...)` nodes.
  - Java, C# and Solidity class fields no longer have a duplicate `Variable` node.
- **Some edge sets changed on purpose:**
  - Program launches are `SPAWNS` edges instead of `CALLS`.
  - Cross-language name-only `CALLS` are gone.
  - C member accesses on names several structs share no longer bind to an arbitrary field.
  - `SEMANTICALLY_RELATED` admission and scores are recalibrated.
- **`search_code` on Windows matches like macOS and Linux.** It used PowerShell `Select-String`, which matched case-insensitively, used .NET regex syntax and read files containing NUL bytes as text. Now every platform matches case-sensitively, uses extended regular expressions and skips binary files, so the same query gives the same answer on every OS (#2642).
- **`uninstall -y` keeps project indexes.** Add `--delete-indexes` to remove them (#2517).
- **`detect_changes` default base.** It now compares against `origin/HEAD` (then `main`, `master`, upstream) instead of always `main` (#2496).
- **Stricter inputs:**
  - Cypher rejects a non-numeric `SKIP`/`LIMIT` that it used to silently ignore (#2002).
  - Regular expressions that would compile too large are refused (#2475).
  - `search_code` caps `context` at 200 lines (#2474).

## Thank you

This release carries 40 pull requests from 29 community contributors, plus work carried into maintainer branches from four more. Every one of them made the graph better for everybody who uses it. Thank you!

- @AmirF194: enclosing `.gitignore` for git-less subfolders, the OpenCode V2 plugin (#2181, #2089)
- @astandrik: test-harness isolation and sanitizer build checks (#2073, #1716, #2199, #2197, #2196)
- @BobbieBarker: `cfg`-fenced Rust functions by bare name (#2370)
- @bmcnaboe: hook and Git-environment test hardening (#1768, #1742, #1741)
- @CaptainMittens: Swift `URL(string:)` routes (#1976)
- @cdeust: Markdown file references as `REFERENCES_FILE` edges (#1832)
- @DavidHLP: Linux system aliases during install activation (#2203)
- @halindrome: watcher backoff for failing index workers (#2075)
- @htarnacki: JAX-RS relative paths and Scala resources; JSON array arguments (#2158, #2160)
- @ilyabrykau-orca: cgo `import "C"` (#1931)
- @isc-tdyar: IRIS `iris.cls()` dispatch (#2367)
- @ivanlinhf: the Scoop manifest (#2301)
- @JosephStarobinets: linear LSP surface decoding (#2288)
- @kavish-19: honest `COUNT` read failures (#2065)
- @knewstimek: three Windows reliability fixes (#2260, #2282, #2362)
- @liuchong: opt-in index resource limits (#1723)
- @lorenzozanee: Cypher `OPTIONAL MATCH` counts and TypeScript awaited generics (#2241, #2242)
- @Lowpower: CLI help for `--format json` (#2140)
- @metehanulusoy: Cypher `SKIP`/`LIMIT` validation (#2002)
- @pcristin: CLI test-fixture lifetime (#2304)
- @Sakil786: Pi extension TypeBox schemas (#1809)
- @SarletteD: nullable string comparison cleanup (#2396)
- @tamerbak: an exact MCP tool inventory in the smoke test (#2263)
- @TheDarkniteFalls: branch-HEAD refresh tests (#2359)
- @tonydzi: the 17-tool documentation (#2225)
- @umi008: Windows freshness reporting (#1787)
- @XIYBHK: export-macro-hidden C/C++ types (#2005)
- @yasmoradi: .NET project files as XML (#2230)
- @z2250389: Unicode repository paths on Windows (#1816)

Work carried or distilled into maintainer branches, with credit in the commits:

- **@BernhardJackiewicz:** the foundation of CBM Lens Beta (#2068).
- **Andrew Hundt (@ahundt):** from #1245, eight fixes across routes and service patterns, Cypher, MCP arguments, C return types and Python scope lookups (#2252–#2256, #2258, #2273, #2274), plus the Windows installer's exclusive temp paths (#2251).
- **@rarepops:** from #2109, CI runner pins and SBOM attestation (#2249).
- **@umi008:** from #1789, naming the failing artifact phase (#2247).
- **@junk151516:** from #2051, the atomic-publish failure reason (#2259).

<!-- cbm-security-verification:start -->
## Security Verification

Every binary published below was scanned by VirusTotal before smoke and soak testing, and the verdict for the exact shipped bytes is linked per product (decisive engines: 61–69).
Every shipped binary was clean.

| Product | Shipped binary | VirusTotal verdict |
|---|---|---|
| `linux-amd64` | `cedf9a2a1f8f523c62864ce2dfc791bb51b43c97845a1c3a6fe908a8bf64009b` | [clean](https://www.virustotal.com/gui/file/cedf9a2a1f8f523c62864ce2dfc791bb51b43c97845a1c3a6fe908a8bf64009b/detection) |
| `linux-arm64` | `5c08405828207f462d734ecd509166390b1ddbf9c2f550b81de80fc299ee8625` | [clean](https://www.virustotal.com/gui/file/5c08405828207f462d734ecd509166390b1ddbf9c2f550b81de80fc299ee8625/detection) |
| `linux-amd64-portable` | `36bc515ee72b90a209c12518696d886b83e64f66aa7366079cf705f233838bad` | [clean](https://www.virustotal.com/gui/file/36bc515ee72b90a209c12518696d886b83e64f66aa7366079cf705f233838bad/detection) |
| `linux-arm64-portable` | `b3621beb342db993781bb640a4736cd24a67d438e881a69025882dd559423c9d` | [clean](https://www.virustotal.com/gui/file/b3621beb342db993781bb640a4736cd24a67d438e881a69025882dd559423c9d/detection) |
| `darwin-amd64` | `2b68d70bb115b7016528592876c74efe1179afaeb38ad6833ad2ccd2c147dd31` | [clean](https://www.virustotal.com/gui/file/2b68d70bb115b7016528592876c74efe1179afaeb38ad6833ad2ccd2c147dd31/detection) |
| `darwin-arm64` | `d26ba94b11b79f727923eaadb811e044a52618ae6d303670df5467f1e6c25015` | [clean](https://www.virustotal.com/gui/file/d26ba94b11b79f727923eaadb811e044a52618ae6d303670df5467f1e6c25015/detection) |
| `windows-amd64` | `770597e6f08871b2903a15229754dd3600c1966c0eb71b08fc82fa8e047626cf` | [clean](https://www.virustotal.com/gui/file/770597e6f08871b2903a15229754dd3600c1966c0eb71b08fc82fa8e047626cf/detection) |
| `windows-arm64` | `df086ae9029e4327a85632f47eb98aa1c8de0234e80656057659e2ed8388f762` | [clean](https://www.virustotal.com/gui/file/df086ae9029e4327a85632f47eb98aa1c8de0234e80656057659e2ed8388f762/detection) |

Selection is tuple-local and defaults to stripped. The selected executable SHA-256 was verified again after packaging; archive containers were not redundantly submitted to VirusTotal. Their hashes remain available in `checksums.txt`.

Durable evidence: [candidate provenance](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.12.0/release-candidates.tsv), [candidate VirusTotal results](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.12.0/virustotal-candidate-results.tsv), [selection decisions](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.12.0/release-selection.tsv).
<!-- cbm-security-verification:end -->

---

> **Source** [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · `v0.12.0` · 2026-10-15 · [upstream release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
