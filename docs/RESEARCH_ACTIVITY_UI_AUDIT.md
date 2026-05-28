# Research Activity UI Audit

## 1. In-Depth Interview Page Rendering

The in-depth interview activity uses the `interview` hash route and a static view in `index.html`.

- Static view shell: `index.html:578`
- Interview hero/objective/personas: `index.html:592`
- Recruitment overview: `index.html:606`
- Participant recruitment panel/table shell: `index.html:617`
- Interview guide/roteiro shell: `index.html:670`
- Route dispatch: `app.js:5655`
- Main renderer: `renderInterviewDetailPage` in `app.js:10764`
- Entry point from methodology rail: `openInterviewDetail` in `app.js:7325`
- Method detection: `isInterviewMethod` in `app.js:7316`

Only methods whose name contains `entrevista em profundidade` or `pesquisa em profundidade` open this page.

## 2. Usability Test Page Rendering

There is no dedicated usability test page renderer today.

`Teste de Usabilidade` appears as a methodology method:

- Method package data: `app.js:1273`
- New discovery methodology UI: `index.html:1199` and `index.html:1265`
- Methodology rail renderer: `renderMethodologyList` in `app.js:10136`

When clicked from the methodology rail, `Teste de Usabilidade` does not match `isInterviewMethod` and does not have a special route. It falls through to the generic method entry drawer:

- Methodology click handler: `app.js:11685`
- Interview-only branch: `app.js:11697`
- Generic fallback: `openMethodEntryModal` via `app.js:11707`
- Drawer shell: `index.html:912`
- Drawer renderer/state binding: `openMethodEntryModal` in `app.js:10607`

## 3. Shared Renderer Or Duplicate Logic

The in-depth interview page and usability test do not currently share a research activity renderer.

Current structure:

- In-depth interview has a dedicated route, static DOM section and renderer functions.
- Usability test is treated as a generic methodology entry and uses the shared method entry drawer.
- Participant detail, transcript and video are specific to the interview session route.

There is no duplicated full-page usability implementation yet. The main risk is that creating a usability page by copying the interview page would duplicate recruitment, participant detail, script, synthesis/transcription and recording logic.

## 4. Users / Participants Table Rendering

The participant table shell is static in `index.html`.

- Table shell: `index.html:632`
- Table body target: `data-interview-participants-body` at `index.html:647`
- Participant seed data: `interviewParticipantSeed` in `app.js:1326`
- Table row renderer: `renderInterviewParticipants` in `app.js:10712`
- Checkbox listener: `app.js:11730`
- Select-all listener: `app.js:11745`
- View participant/session button listener: `app.js:11710`

Rows include checkbox, participant name, email, role, company, recruitment status and a view button enabled only for confirmed participants.

## 5. Recruitment Buttons Rendering

Recruitment buttons are static in the interview page shell and wired in JavaScript.

- Microsoft Teams button: `index.html:652`
- Outlook button: `index.html:660`
- Teams click listener: `app.js:11752`
- Outlook click listener: `app.js:11756`
- Recruitment simulation: `simulateRecruitment` in `app.js:10802`
- Recruitment status refresh: `updateInterviewOverview` in `app.js:10695`

These buttons currently simulate external recruitment. They do not call real Teams or Outlook integrations.

## 6. Selected Users Quantity Tag

The selected quantity tag is rendered in the recruitment panel heading.

- Static counter shell: `index.html:624`
- Dynamic count target: `data-interview-selected-count` at `index.html:625`
- Count update logic: `updateInterviewOverview` in `app.js:10695`
- Selection state source: `selectedInterviewParticipantIds`
- Checkbox updates: `app.js:11730`
- Select-all updates: `app.js:11745`

The counter is recalculated whenever participant rows are rendered.

## 7. Script / Roteiro Rendering

The interview script is rendered only for the in-depth interview activity.

- Static panel shell: `index.html:670`
- Dynamic target: `data-interview-route-blocks` at `index.html:678`
- Question source: `interviewGuideQuestions` in `app.js:1344`
- Renderer: `renderInterviewGuide` in `app.js:10749`

The roteiro is a single ordered list with 10 questions. It is not currently parameterized by activity type, participant profile or methodology.

## 8. Synthesis / Transcription Rendering

There are two related surfaces:

Participant-level synthesis:

- Static participant insights panel: `index.html:727`
- Dynamic target: `data-participant-insights` at `index.html:735`
- Detail data source: `participantInterviewDetails` in `app.js:1357`
- Renderer: `renderParticipantInsights` in `app.js:10901`

Participant-level transcription:

- Static transcript panel: `index.html:738`
- Dynamic target: `data-transcript-content` at `index.html:745`
- Renderer: `renderTranscript` in `app.js:10936`
- Accordion toggle listener: `app.js:11760`

There is also a separate discovery-level synthesis page:

- Static synthesis route shell: `index.html:574`
- Route dispatch: `app.js:5650`
- Renderer: `renderSynthesisPage` in `app.js:10417`

The research activity pages do not currently share a synthesis/transcription component with the discovery-level synthesis page.

## 9. Video Preview / Visualization Rendering

Video visualization is implemented as a mock recording modal for participant interview sessions.

- Recording panel shell: `index.html:748`
- Watch recording button: `index.html:754`
- Recording modal shell: `index.html:765`
- Mock video player: `index.html:780`
- Play button: `data-video-play` at `index.html:782`
- Video state/progress/duration targets: `index.html:787`, `index.html:791`, `index.html:792`
- Open modal logic: `openRecordingModal` in `app.js:10984`
- Close modal logic: `closeRecordingModal` in `app.js:10999`
- Mock playback logic: `toggleMockVideoPlayback` in `app.js:11006`
- Event listeners: `app.js:11766` and `app.js:11773`

This is a mock visualization. It does not load a real video asset.

## 10. Participant Details Modal / Page

Participant details are rendered as a routed page, not as a modal.

- Static route shell: `index.html:690`
- Participant hero: `index.html:704`
- Session metadata: `index.html:711`
- Insights panel: `index.html:727`
- Transcript panel: `index.html:738`
- Recording panel: `index.html:748`
- Route dispatch: `app.js:5661`
- Renderer: `renderParticipantInterviewPage` in `app.js:10962`
- Navigation from table row: `app.js:11710`

The only modal in this flow is the recording/video modal.

## 11. Recommended Implementation Order

1. Define a shared research activity data model for methods that need participant recruitment, scripts, sessions, transcripts and recordings.
2. Extract the current interview participant table into a reusable renderer before adding a usability-specific page.
3. Extract recruitment state/actions into shared helpers, keeping Teams/Outlook as simulated future integrations.
4. Parameterize the selected quantity tag, target sample size and status summary by activity type.
5. Extract script/roteiro rendering so interview and usability can use different prompt/question sets.
6. Extract participant/session detail rendering so interview sessions and usability sessions can share the same page structure where appropriate.
7. Add a dedicated usability test route only after the shared renderers are in place.
8. Adapt synthesis/transcription rendering for usability-specific outputs, such as task success, friction points, severity and usability findings.
9. Keep video visualization mock-only until a real file/storage contract exists.
10. Add QA around route navigation from methodology cards, recruitment state changes, participant detail navigation, transcript accordion and mock video playback.

## Notes

No behavior was changed during this audit. This document only maps the current implementation and recommends a safe implementation sequence.
