---
title: "pandas-ai v3.0.0"
project: "pandas-ai"
repo: "sinaptik-ai/pandas-ai"
tag: "v3.0.0"
published: "2025-10-07"
type: "major"
lang: "en"
summary: "Full Changelog: https://github.com/sinaptik-ai/pandas-ai/compare/v2.2.15...v3.0.0"
---

# pandas-ai v3.0.0

## What's Changed
* Fix Azure OpenAI LLM backend by @ak11234 in https://github.com/sinaptik-ai/pandas-ai/pull/1364
* docs: add AWS Bedrock tutorial to the example by @dimwael in https://github.com/sinaptik-ai/pandas-ai/pull/1350
* Added export const dynamic='force-dynamic'; by @khoonie in https://github.com/sinaptik-ai/pandas-ai/pull/1303
* Removed _core property on SmartDataframe that causes maximum recursion depth exceeded by @andeplane in https://github.com/sinaptik-ai/pandas-ai/pull/1388
* Fix making requests during the next.js build process by @xyb in https://github.com/sinaptik-ai/pandas-ai/pull/1382
* Fix server Dockerfile by @xyb in https://github.com/sinaptik-ai/pandas-ai/pull/1381
* Update custom-whitelisted-dependencies.mdx by @pesmeriz in https://github.com/sinaptik-ai/pandas-ai/pull/1366
* fix bug in malicious code scan by @shoebham in https://github.com/sinaptik-ai/pandas-ai/pull/1341
* Fix/support chinese in prompt generation by @cFireworks in https://github.com/sinaptik-ai/pandas-ai/pull/1317
* Adding Milvus as a choice of vectorstore. by @ericljx2020-gmail in https://github.com/sinaptik-ai/pandas-ai/pull/1389
* refactor(Connectors): remove connectors and depreacted agents by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1433
* feat(VirtualDataFrame): virtual dataframe to load data on demand and enable direct_sql  by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1434
* refactor(pipeline): remove pipelines and clean workflows by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1435
* feat(Dataframe): save dataframe yml by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1443
* feat(push): dataframe push to the remote server by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1445
* feat(Dataframe): pull method to fetch dataset from remote server by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1446
* fix(dataloader): add support in dataloader for csv and parquet by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1451
* remove[BambooVectorstore]:  delete bamboo vectorstore completely by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1463
* feat(BambooLLM): adding implementation for bamboollm updated version by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1462
* feat(Unified_config): keep global config and use throughout the appli… by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1467
* fix typo in smart_dataframe breaking import by @gdcsinaptik in https://github.com/sinaptik-ai/pandas-ai/pull/1468
* fix(load): issue load path of dataset and virtualized=true error on csv by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1474
* chore(PandaAIKey): improve set up for api key by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1490
* fix(dataframe): default config for dataframe by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1502
* docs: reorganize documentation for v2 and v3 versions by @gdcsinaptik in https://github.com/sinaptik-ai/pandas-ai/pull/1505
* feat(dataset): prompt message to the user on push and pull by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1507
* fix(test_cases): test cases for pandas 3.0 by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1506
* fix(CI_Pipeline): resolve dependency issues causing build failures by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1508
* fix(prompt_id): attribute missing error by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1509
* fix(dataset): push dataset with name by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1510
* refactor: update environment variable from PANDASAI_API_KEY to PANDABI_API_KEY and from PANDASAI_API_URL to PANDABI_API_URL by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1511
* refactor: remove complexity by @gventuri in https://github.com/sinaptik-ai/pandas-ai/pull/1512
* refactor(loader): renames _load_from_source to _load_from_local_source removes unreachable code and adds tests for _load_from_local_source by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1514
* feat(SemanticLayerSchema): Adding a SemanticLayerSchema class with logical and business validation by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1516
* Added notebooks for 3.0 and removed old examples by @gdcsinaptik in https://github.com/sinaptik-ai/pandas-ai/pull/1515
* fix(pandasai_session): fix missing code and imports by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1518
* feat(SemanticLayerSchema): Refactoring using SemanticLayerSchema all over the code instead of the dictionary by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1520
* feat(SemanticLayerSchema): making column type optional and avoid dumping and parsing null values in the SemanticLayerSchema by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1521
* fix(Dataframe): adding default dataframe name to enable sql query on it, simplified dataframe serialization by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1523
* Updated readme, docs, notebooks by @gdcsinaptik in https://github.com/sinaptik-ai/pandas-ai/pull/1522
* feat(Dataframe): add classmethod get_default_schema to generate default schema by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1525
* fix(test): fixing tests for when PANDABI_API_KEY is present in .env by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1527
* fix(Agent): adding test to improve coverage by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1528
* docs: update v3 documentation, readme and examples by @gdcsinaptik in https://github.com/sinaptik-ai/pandas-ai/pull/1526
* fix(VirtualDataframe): fixing virtual dataframe name conflict by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1531
* feature(View): add view support and relationship validation in SemanticLayerSchema by @ellipsis-dev[bot] in https://github.com/sinaptik-ai/pandas-ai/pull/1534
* udpated gif in readme 3.0 by @gdcsinaptik in https://github.com/sinaptik-ai/pandas-ai/pull/1536
* fix: dependency issue and updated lock files by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1539
* feature(View): enabling view in loader by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1537
* test: integration tests for error rate by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1542
* feature(LLMJudge): adding set of integration test where OpanAI is used as LLM Judge by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1546
* fix: sanitize name of dataset in pai.load by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1548
* feat(sql_connector): add support for sql connector by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1543
* docs: updated installation instructions and fixed semantic-layer parsing error by @gdcsinaptik in https://github.com/sinaptik-ai/pandas-ai/pull/1550
* feature(View): extend pai.create to support views by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1549
* fix: removed deprecated df._data by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1552
* feat(sql_connector): add json serialization to text by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1551
* fix(sql): add params args to pass to the connector by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1553
* feat(sandbox): adding docker sandbox by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1517
* fix(dependencies): update poetry file and pyproject files by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1557
* feat: add transformations by @gventuri in https://github.com/sinaptik-ai/pandas-ai/pull/1555
* feat: add CLI by @gventuri in https://github.com/sinaptik-ai/pandas-ai/pull/1560
* feat: filter only the columns that are provided in the schema by @gventuri in https://github.com/sinaptik-ai/pandas-ai/pull/1562
* fix(sql): dependencies of sql fixed by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1564
* fix: adding http client parameter in azure_openai.py by @prasum in https://github.com/sinaptik-ai/pandas-ai/pull/1567
* fix(pandasai-sql): dropping support for sqlite by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1558
* feature(SqlLoader): transformations in SqlLoader by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1569
* fix(sql_query): validate if the query is not malicious by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1568
* test: add more tests in the agent by @gventuri in https://github.com/sinaptik-ai/pandas-ai/pull/1572
* feature(FileManager): adding FileManager to make feasible work with the library in other environment by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1573
* fix(sql): allow paramerized query through sql sanitization by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1576
* docs: update docs for sql, create, links, examples by @gdcsinaptik in https://github.com/sinaptik-ai/pandas-ai/pull/1571
* fix(FileManager): updated path in create and pull methods by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1579
* fix(Views): updated views to reflect refactors by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1582
* fix(config): dataframe remove config variable class attribute and chat  by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1587
* chore: remove numpy dependency by @christophfroeschl in https://github.com/sinaptik-ai/pandas-ai/pull/1580
* fix(deps): remove numpy strict installation from all extensions by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1591
* fix(load): update error message in case of dataset not found locally and missing api keys by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1589
* feature(Views): adding view for local sources by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1586
* feat(sandbox): add sandbox support in pai.chat and df.chat by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1595
* feature(Views): views for a single dataframe by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1594
* fix: transpiling sql to specific dialect by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1596
* fix(schema): make columns mandatory for view by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1599
* fix(sql_generation): handle scenario where table columns have "from" keyword in query by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1600
* feature(GroupBy): adding group by functionality by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1603
* fix(views): transformation using raw sql by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1608
* fix(dataset): slug format validation on load by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1609
* fix(Views): multiple joins by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1611
* fix(View): fixing aliases in view by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1614
* docs: docstring improvements by @SaroAntonelloLovito in https://github.com/sinaptik-ai/pandas-ai/pull/1597
* feature(LocalLoader): enabling local loader to use duckdb loader by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1620
* fix: fixing datasets naming convention by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1623
* fix: passing correct dialect and error to llm by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1625
* fix(license): pypi license not displayed for the ee extensions by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1634
* fix(cache): removes cache by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1635
* feature(SQLTransformation): SQL transformation by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1636
* fix(expression): modulo operation issues by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1637
* feature(IntegrationTests): add integration tests by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1640
* docs: update ee license url in readme by @czakop in https://github.com/sinaptik-ai/pandas-ai/pull/1642
* fix(coverage): adding unit tests by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1641
* fix(sandbox): ignore non string constants for finding query string by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1645
* fix(chart): fixed path fow Windows by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1643
* feature(paginator): adding paginator functionality by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1644
* fix(localloader): adding parameters by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1647
* feature(litellm): pandasai litellm wrapper by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1648
* fix(agent): remove wrong double validation by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1659
* fix(query builders): quoting identifiers by default by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1658
* fix(view_loader): add optional parameters to execute_local_query method by @maidacundo in https://github.com/sinaptik-ai/pandas-ai/pull/1663
* fix: correct column parsing by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1667
* fix(agent): chat with view and other dataset by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1660
* fix(core): img path in windows by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1668
* fix(sql_query): resolve double dash issue in url path by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1674
* fix(loader): optimization by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1676
* fix(loaders): avoid extra initialization of loader by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1678
* fix(docs): sandbox documentation and example corrected by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1682
* fix(read_csv): lower file name by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1681
* fix: dataset path error message and fixing tests by @scaliseraoul in https://github.com/sinaptik-ai/pandas-ai/pull/1686
* fix(error_correction): error correction for code generation by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1687
* fix(df_redeclaration): remove dataframe redeclaration checks by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1688
* fix(dataframe_serialize): truncate content of dataframe columns by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1691
* fix(sql): pagination remove extra conversions by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1702
* Fix: Resolve Python 3.8 Compatibility Issue in semantic_layer_schema.py by @krakken190 in https://github.com/sinaptik-ai/pandas-ai/pull/1705
* fix(serializer): user apply instead of applymap by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1704
* fix(view_loader): avoid lower casing the column name by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1703
* fix(duckdbConnection): make duckdb connection manager non singleton by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1710
* updated v2 and v3 library docs by @gdcsinaptik in https://github.com/sinaptik-ai/pandas-ai/pull/1735
* Add support for new GPT models from OpenAI by @nehcneb in https://github.com/sinaptik-ai/pandas-ai/pull/1717
* serialization of columns added into the definition of the table by @matteocacciola in https://github.com/sinaptik-ai/pandas-ai/pull/1733
* refactor: remove push and pull method from dataframe by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1758
* refactor(bamboollm): remove bamboollm and documentation by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1760
* refactor: remove load from remote server by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1761
* fix: parser exception catch by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1762
* introducing read excel by @matteocacciola in https://github.com/sinaptik-ai/pandas-ai/pull/1757
* fix(sql): dialect sql parser fixed by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1778
* docs: update views documentation by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1800
* fixing LiteLLM call for the follow up by @matteocacciola in https://github.com/sinaptik-ai/pandas-ai/pull/1799
* fix: last_code_generated retrieval logic in multi-turn conversations by @kingdomad in https://github.com/sinaptik-ai/pandas-ai/pull/1784
* feat: add sqlserver support by @GiFarina in https://github.com/sinaptik-ai/pandas-ai/pull/1812
* Docs/update v3 by @gdcsinaptik in https://github.com/sinaptik-ai/pandas-ai/pull/1822
* feat: relax pyarrow dependency constraint to support versions up to 19.x by @rayzeller in https://github.com/sinaptik-ai/pandas-ai/pull/1806
* Add docstrings to SmartDataframe class and __init__ method by @aadilshaikh123 in https://github.com/sinaptik-ai/pandas-ai/pull/1804
* Fix typo in CONTRIBUTING.md by @aadilshaikh123 in https://github.com/sinaptik-ai/pandas-ai/pull/1802
* fix: template not adding the response type by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1830
* Add formatting in number response by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1829
* update github workflows version by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1828
* feat(skills): add skills for the llm to use by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1827
* refactor move skills to ee folder by @ArslanSaleem in https://github.com/sinaptik-ai/pandas-ai/pull/1831
* Updated docs and added migration guide by @gdcsinaptik in https://github.com/sinaptik-ai/pandas-ai/pull/1832

## New Contributors
* @ak11234 made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1364
* @dimwael made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1350
* @khoonie made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1303
* @andeplane made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1388
* @xyb made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1382
* @pesmeriz made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1366
* @shoebham made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1341
* @ericljx2020-gmail made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1389
* @gdcsinaptik made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1468
* @scaliseraoul made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1511
* @ellipsis-dev[bot] made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1534
* @prasum made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1567
* @christophfroeschl made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1580
* @SaroAntonelloLovito made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1597
* @czakop made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1642
* @maidacundo made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1663
* @krakken190 made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1705
* @matteocacciola made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1733
* @kingdomad made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1784
* @GiFarina made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1812
* @rayzeller made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1806
* @aadilshaikh123 made their first contribution in https://github.com/sinaptik-ai/pandas-ai/pull/1804

**Full Changelog**: https://github.com/sinaptik-ai/pandas-ai/compare/v2.2.15...v3.0.0

---

> **Source** [sinaptik-ai/pandas-ai](https://github.com/sinaptik-ai/pandas-ai) · `v3.0.0` · 2025-10-07 · [upstream release](https://github.com/sinaptik-ai/pandas-ai/releases/tag/v3.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
