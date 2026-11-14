---
title: "Vane v1.12.0"
project: "Vane"
repo: "ItzCrazyKns/Vane"
tag: "v1.12.0"
version: "v1.12.0"
published: "2025-12-27"
type: "minor"
lang: "en"
summary: "This is a major release featuring a complete architectural overhaul. We've removed Langchain in favor of a custom implementation for low-level control over streaming, generation, and provider-specific features. This…"
---

# Vane v1.12.0

## What's Changed

This is a **major release** featuring a complete architectural overhaul. We've removed Langchain in favor of a custom implementation for low-level control over streaming, generation, and provider-specific features. This refactor lays the groundwork for new capabilities in upcoming releases.

### General Updates
- Renamed providers to connections for better UX. Added switch config field, separated personalization and preferences.
- Fixed SearxNG build and startup errors.
- Added new agents DIR, migrated suggestions, video and audio agents.
- Added message and chunk types for better type safety.
- Added code block rendering with syntax highlighting.
- Added version number and GitHub link in settings.
- Various UI improvements with animations via Framer Motion, fixed theme inconsistencies, and updated numerous small but noticeable details. Overall the UI is more reactive now.

## Langchain Removal & Custom Provider System

Removed Langchain and implemented custom base and provider classes with `streamText`, `streamObject`, `generateText` and `generateObject` methods. We've also implemented function calling with partial streaming so the app now uses it instead of XML parsing (was a chaotic one).

Langchain is removed to get low-level control over how things are streamed, how things are generated, etc. This allows us to add provider-specific features like structured outputs and fine-tune the generation process.

## New Session Manager

Added a new session manager where each session has an ID and is recorded for 30 minutes. Sessions can be restored via the ID if your page refreshes or the stream disconnects. The manager includes methods for block streaming, replaying, multiple listeners, etc.

**Automatic Stream Reconnection**: If the page gets refreshed or the stream is disconnected, you'll now be able to automatically reconnect to the stream. The app resumes from where the LLM left off and streams back the entire response that was generated before, allowing messages to continue without waiting for completion.

## Widgets

Added widgets that are extracted and executed in parallel to the research. They fetch specific types of data like weather, stock information, and calculated results (more widgets coming soon). Each widget is represented with a specific UI card which enhances the UX.

Widgets currently available:
- Weather information
- Stock market data
- Mathematical calculations

<img width="1920" height="1280" alt="857_1x_shots_so" src="https://github.com/user-attachments/assets/5ce48cc1-5029-4c53-ba1d-adf322d594ed" />

## Query Classification & Researcher with Actions

**Query Classification**: Each query is now classified before research begins, ensuring proper sources and widget information extraction.

**Researcher Class with Actions**: The researcher uses actions (which use tool calling), along with specific actions for reasoning. This allows the researcher to have many actions like web search, scraping, specific website search, discussion search, file uploads search, etc. It enables the possibility of adding more actions and integrations like Google Workspace (Calendar, Gmail, etc.) in future releases.

## Deep Research Mode (Beta)

Added quality search mode (deep research) where the LLM reasons iteratively over the collected data to predict the next action. It takes appropriate actions until it's confident it has enough information to answer, then prepares a long, comprehensive report. This allows deeper exploration of topics and preparing detailed reports.

**Note**: Deep research is currently in beta. There's a lot more to come in this feature like creating documents, images, files, charts, etc. to prepare proper reports.

<img width="1920" height="1280" alt="576shots_so" src="https://github.com/user-attachments/assets/11e7f7bc-f7eb-4cb4-9f63-01a43d033a38" />

## Updated Research Modes

**Balanced Mode**: Now also forces the LLM to reason (though it only has a limited maximum number of actions for controlled token usage).

**Speed Mode**: Runs without any reasoning for fast responses.

## Block & JSON Patch Based Streaming

Now each and every step of the LLM is streamed so you can see what the LLM is doing, so it doesn't feel stuck. This provides real-time visibility into the research process.

## New Upload Manager & Enhanced File Search

Added a new upload manager and upload store for handling file uploads and searching. It supports PDF, DOCX, and text files with no hard limits on file size or number (within reasonable limits).

The manager allows searching across multiple files with queries that are then reranked and selected via RRF (Reciprocal Rank Fusion), enhancing retrieval quality significantly.

## Redesigned Source System

Focus modes are removed and replaced with 3 sources: **web**, **academic**, and **discussions**. They allow searching for what they say, can be toggled individually, and you can use all 3 at once or disable external data sources entirely to work only with uploaded files.

---

**Full Changelog**: https://github.com/ItzCrazyKns/Perplexica/compare/v1.11.2...v1.12.0

---

> **Source** [ItzCrazyKns/Vane](https://github.com/ItzCrazyKns/Vane) · `v1.12.0` · 2025-12-27 · [upstream release](https://github.com/ItzCrazyKns/Vane/releases/tag/v1.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
