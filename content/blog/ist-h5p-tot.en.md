---
title: "Is H5P dead?"
date: 2026-07-09
description: "An article on why interactive learning content may increasingly need semantic task formats, AI-supported authoring and porting skills, renderers, and optional tutor connections rather than a monolithic authoring tool."
summary: "H5P was important for bringing interactivity into learning platforms. The next step could be a decoupled architecture of semantic task formats, AI-supported authoring and porting skills, renderer libraries, and optional AI/tutor integration."
tags: ["educational media", "interoperability", "H5P", "AI", "learning infrastructure"]
translationKey: "is-h5p-dead"
heroImage: "/img/blog/ist-h5p-tot/hero-white-blue-red.png"
heroAlt: "Abstract editorial illustration of an opened digital learning package on a light background, unfolding into blue and red modular layers, cards, and connection lines for semantic tasks, components, and optional tutor integrations."
---

> Thesis: H5P is not becoming obsolete because nobody needs interactive tasks anymore. On the contrary: interactive, adaptive, and AI-supported learning tasks are becoming more important. What is becoming obsolete is the idea that these tasks have to be produced as manually assembled tool packages.

H5P was a good answer to a real problem: How do we get interactive learning content into learning platforms without developing a custom application for every task? Multiple choice, drag and drop, fill-in-the-blank tasks, interactive videos, small branching scenarios — all of this could be created with H5P at a comparatively low threshold and embedded in Moodle, WordPress, and other systems.

But the conditions of production have changed fundamentally. AI can draft tasks, generate variants, formulate feedback, create media, and adapt content to different target groups. At the same time, educational media need a higher degree of standardization, quality assurance, accessibility, reusability, and technical interoperability. This is where H5P starts to look like a transitional technology.

So the question is not: How do we improve H5P? The more interesting question is: Is H5P dead? And what remains if we break H5P down into its actual functions?

## H5P bundles things that should be separated in the future

H5P combines several things in one package that should probably be separated in the future: a content model, an authoring interface, interaction logic, runtime presentation, an export format, and a limited form of evaluation and feedback.

This bundling was practical as long as the alternative was custom software development. But it becomes problematic once learning content is supposed to be more dynamic, automated, quality-assured, and portable across platforms.

Because then we do not want to click every task together in a form. We want to describe tasks semantically, check them automatically, standardize and professionalize their creation, review, and porting through AI skills — and then render them through standardized components.

In short:

> The multiple-choice task is not disappearing. What is disappearing is the need to build it as an H5P form.

## What is needed instead

In my view, three layers will be needed above all: a semantic exchange format, renderer and component libraries for presentation, and an optional runtime wrapper for AI, tutor, and analytics integrations. AI skills support and enable this: they help with authoring, with creating the right semantic description, with review, and with porting content.

## Layer 1: Semantic exchange format

The first layer does not describe what a task looks like in a particular tool. It describes content.

Such a format describes learning objectives, competency references, target groups, task types, instructions, material, response logic, feedback, typical misconceptions, hints, difficulty, variant rules, metadata, licenses, accessibility, and analytics or tutor connection points.

The format is not H5P-specific. It can be described in JSON, YAML, or an existing standard profile. Obvious reference points are in the 1EdTech/IMS ecosystem, such as QTI for question and test interoperability. For learning resource metadata, schema.org or LRMI are relevant; for learning activities, xAPI or Caliper. The crucial point is not a single standard name, but the architectural idea: the semantics must be portable and interoperable.

A simple excerpt could look like this:

<details class="jr-code-details">
  <summary>Show an example semantic task object</summary>
  <pre><code class="language-ts">export const sampleTask = {
  id: &quot;task-h5p-semantic-format-001&quot;,
  schema: &quot;qx.task.v0&quot;,
  taskType: &quot;multiple-choice&quot;,
  title: &quot;What replaces H5P in a modern production model?&quot;,
  stem: &quot;Which building blocks matter more in this thesis than a single authoring tool such as H5P?&quot;,
  learningObjective:
    &quot;Learners distinguish between an exchange format, AI-supported authoring/porting support, and a rendering library.&quot;,
  choices: [
    {
      id: &quot;a&quot;,
      text: &quot;A semantic exchange format for tasks, media, feedback, and metadata.&quot;,
      correct: true,
      feedback: &quot;Exactly: semantics must be portable and not tied to one specific tool.&quot;
    },
    {
      id: &quot;b&quot;,
      text: &quot;AI skills for authoring, review, and porting that prepare suitable semantics and presentation.&quot;,
      correct: true,
      feedback: &quot;Correct: AI skills support the process before rendering — they are not part of the browser task itself.&quot;
    },
    {
      id: &quot;c&quot;,
      text: &quot;A renderer or component library that presents tasks consistently.&quot;,
      correct: true,
      feedback: &quot;Correct: the interface becomes reusable and testable instead of being clicked together task by task.&quot;
    },
    {
      id: &quot;d&quot;,
      text: &quot;As many manually maintained variants of the same H5P task as possible.&quot;,
      correct: false,
      feedback: &quot;Not really: this kind of manual variant maintenance is precisely the problem dynamic formats should avoid.&quot;
    }
  ],
  metadata: {
    subject: &quot;Digital educational infrastructure&quot;,
    targetGroup: &quot;educational media, OER, EdTech, public administration&quot;,
    estimatedMinutes: 3,
    license: &quot;CC BY 4.0&quot;,
    source: &quot;Blog prototype: Is H5P dead?&quot;
  },
  accessibility: {
    plainLanguage:
      &quot;The task asks which parts are needed when learning tasks are no longer built directly in H5P.&quot;,
    ariaLabel: &quot;Multiple-choice task on replacing H5P with semantic formats, AI skills, and renderers&quot;
  }
};</code></pre>
</details>

The decisive point is this: the task is not yet an H5P task. It is not yet a React component either. It is first a semantically described learning interaction.

## Companion layer: AI skills for authoring, review, and porting

H5P thinks in content types: multiple choice, drag and drop, interactive video, branching scenario, and so on. A more modern model should not simply replace “content types” with frontend components. AI skills support the work around the task. They help create the right semantic description, know existing libraries and components, take them into account when code is created, identify gaps, and suggest extensions where necessary.

This lateral skill layer can be understood in four roles:

### 1. Production and authoring skills

These AI skills help create tasks. They know didactic patterns, domain logics, target groups, difficulty levels, and common mistakes in task construction.

They can derive task ideas from a source text, formulate plausible distractors, write learning-supportive feedback, generate variants by learning objective or competency level, and also check language, level, accessibility, sources, licenses, and metadata.

These skills run in the production process, before the task is published. They do not replace editorial responsibility; they make editorial work faster, more consistent, and easier to check.

### 2. Porting and adapter skills

These skills know existing formats, standards, and target systems. For example, they know how a task object can be translated into a QTI profile, a JSON-based QX profile, an xAPI/Caliper event structure, or an LMS-compatible handover. But they do not themselves turn the task into a runtime. They prepare the porting step and check what is missing for the target system.

They answer questions such as: Which fields does this format require? Which metadata is missing? Which QTI structure fits the task? Which analytics events should be generated? And which information needs to be added for LTI, cmi5, or another target system?

This is an important difference from H5P: the authoring tool is not the standard. The important thing is transformability between semantic formats, platforms, and runtimes.

### 3. Library and extension skills

These skills do not run as React code in the browser. They help during authoring and porting to decide which existing task and media libraries, renderers, interaction types, and best practices fit a particular task — and where an existing library is not enough.

Such a skill knows, for example, which React or Web Component library can render a multiple-choice task, which video interaction library supports timecodes, jump markers, or overlays, which renderers are accessible enough, and which events should be prepared for a tutor, analytics, or a learning record store. If no existing component fits, it can also produce an extension brief: Which component is missing? Which props, events, accessibility requirements, and tests would it need?

These skills are AI-supported mediators alongside the actual technical pipeline: between the subject-matter intention, the semantic task format, existing libraries, didactic best practices, and the concrete target environment.

### 4. Quality assurance and policy skills

These skills check whether a task is good enough from a subject-matter, didactic, technical, legal, and accessibility perspective. They mainly run before publication or when porting into a target system; optionally, they can also prepare policy rules for later AI or tutor functions.

They could check, for example, whether a task has a clear solution, whether distractors are plausible but not misleading, whether feedback really matches the mistake, whether the task promotes understanding rather than simple recognition, whether accessibility and licensing issues are clear, and which AI or tutor functions should be allowed for this task at all.

This creates a high degree of standardization and quality assurance without losing the ability to render tasks dynamically.

### Example: technical adapter logic in the prototype

In the small prototype, this idea is still heavily simplified. There is only technical adapter logic that turns the semantic description into a renderable multiple-choice model:

<details class="jr-code-details">
  <summary>Show a small example of the technical adapter logic</summary>
  <pre><code class="language-ts">const renderableTask = qxMultipleChoiceAdapter(sampleTask);</code></pre>
</details>

This `qxMultipleChoiceAdapter` is not a skill in the AI sense, but technical adapter logic. It creates the renderer type, normalized options, evaluation function, feedback logic, QA warnings, and the expected solution. The actual AI skills would help earlier or during porting: with drafting, checking, translating into target formats, and choosing suitable libraries.

## Layer 3: Renderer and task libraries

The third layer is presentation. It does not require monolithic authoring tools, but standardized libraries:

- React components,
- Web Components,
- video interaction libraries,
- quiz renderers,
- simulation components,
- LMS wrappers,
- app wrappers.

These renderers do not receive some arbitrary H5P export, but a normalized task. This allows them to be developed centrally, tested, designed for accessibility, and used across platforms.

Importantly, such components do not have to sit flat next to each other. They can be nested. A learning page can contain a layout renderer, inside it a video renderer, inside that timecode overlays, multiple-choice checks, or reflection cards. The semantic description therefore has to describe not only individual tasks, but also compositions: Which component contains which other component, which events are exposed, and which parts remain replaceable?

In the prototype, this is a simple React component:

<details class="jr-code-details">
  <summary>Show a small example of renderer embedding</summary>
  <pre><code class="language-tsx">&lt;MultipleChoiceTask task={renderableTask} /&gt;</code></pre>
</details>

It renders checkboxes, a check button, a score, and feedback. But the component does not need to know where the task came from. It could receive the same structure from an authoring system, an AI workflow, a QTI import, or a content API.

## Layer 4: Optional runtime AI and tutor integration

The next step goes beyond classic H5P logic. Tasks should not only be static interactions. They should be able to expose their state at runtime — but only where the environment supports this.

The principle is progressive enhancement.

A task or content type therefore needs a stable core that works everywhere: show content, capture input, check answers, provide feedback, and report a result locally or to an LMS.

Optional extensions can sit on top of that: tutor state, adaptive hints, AI explanations, misconception diagnosis, analytics events, or personalized variants.

In an adaptive system, the task can pass its state to a tutor and receive context-sensitive support. In Moodle or a simple LMS embed, the same task runs with fewer features: presentation, interaction, feedback, score. AI integration is not a prerequisite; it is an additional capability.

For this, a tutor system needs information about which options were selected, which misconceptions are visible, how many attempts were made, which hints were used, how confident the answer appears, and what intervention might make sense next.

That requires a wrapper. The wrapper mediates between the task, the target environment, the AI service, and the tutor system. It must support graceful degradation: if there is no tutor, no AI, or no analytics endpoint, the core task still remains usable.

It collects the task state, exposes it in a controlled way, publishes events, accepts tutor context, inserts AI hints or adaptive help, and enforces data protection, policy, logging, and analytics rules.

The important point is that the task does not become arbitrary or uncontrolled. On the contrary, the wrapper can enforce standards: Which data may go to the AI? Which data stays local? Which prompts are allowed? Which response types may the AI return? When is editorial approval required? And when may the tutor give hints, but not the solution?

This creates dynamism without giving up quality assurance.

## Diagram: how the layers work together

<figure class="jr-contained-figure jr-schema-figure">
  <img class="jr-contain-image" src="/img/blog/ist-h5p-tot/schema.svg" alt="Diagram: semantic task format, AI skills, runtime wrapper, and renderers">
</figure>

The diagram shows the intended layering: semantics, renderers, an optional runtime wrapper, and a lateral AI skill layer for authoring, review, porting, and library extensions.

In short:

- Semantics describe the task.
- AI skills support authoring, review, porting, and extension briefs for missing components.
- Renderers present the semantic task.
- The runtime wrapper connects task, state, AI, and tutor where the target environment supports these extensions.
- Without AI/tutor integration, the task continues to run with reduced functionality, for example in Moodle or a simple LMS embed.
- Analytics and review flow back into editorial work and quality assurance.

## Embedded prototype

The following mini task shows the thesis directly in the article. It is a small embedded demo: semantic task, simple technical adapter logic, standardized presentation. In a full architecture, AI skills would support authoring, review, and porting beforehand; the same core could run in Moodle with reduced functionality or expose additional tutor state in an adaptive system.

The prototype code is publicly available on GitHub: [janrenz/h5p-ist-tot-prototype](https://github.com/janrenz/h5p-ist-tot-prototype).

<div class="jr-qx-demo" data-qx-demo>
  <div class="jr-qx-demo__meta">Demo · semantic task → adapter logic → renderer</div>
  <h3>What replaces H5P in a modern production model?</h3>
  <p>Which building blocks matter more in this thesis than a single authoring tool such as H5P?</p>
  <label><input type="checkbox" value="a"> A semantic exchange format for tasks, media, feedback, and metadata.</label>
  <label><input type="checkbox" value="b"> AI skills for authoring, review, and porting that prepare suitable semantics and presentation.</label>
  <label><input type="checkbox" value="c"> A renderer or component library that presents tasks consistently.</label>
  <label><input type="checkbox" value="d"> As many manually maintained variants of the same H5P task as possible.</label>
  <button type="button">Check</button>
  <div class="jr-qx-demo__result" aria-live="polite"></div>
</div>

<script>
(function () {
  document.querySelectorAll('[data-qx-demo]').forEach(function (demo) {
    var button = demo.querySelector('button');
    var result = demo.querySelector('.jr-qx-demo__result');
    var feedback = {
      a: 'Exactly: semantics must be portable and not tied to one specific tool.',
      b: 'Correct: AI skills support the process before rendering — they are not part of the browser task itself.',
      c: 'Correct: the interface becomes reusable and testable instead of being clicked together task by task.',
      d: 'Not really: this kind of manual variant maintenance is precisely the problem.'
    };
    button.addEventListener('click', function () {
      var selected = Array.from(demo.querySelectorAll('input:checked')).map(function (input) { return input.value; });
      var correct = ['a', 'b', 'c'];
      var isCorrect = correct.every(function (id) { return selected.includes(id); }) && selected.every(function (id) { return correct.includes(id); });
      var score = Math.max(0, Math.round((selected.filter(function (id) { return correct.includes(id); }).length / correct.length - (selected.includes('d') ? 0.25 : 0)) * 100));
      result.className = 'jr-qx-demo__result ' + (isCorrect ? 'is-success' : 'is-partial');
      result.innerHTML = '<strong>' + (isCorrect ? 'Completely correct' : 'Not complete yet') + '</strong><span>Score: ' + score + '%</span><ul>' + selected.map(function (id) { return '<li>' + feedback[id] + '</li>'; }).join('') + '</ul>';
    });
  });
})();
</script>

## Why this replaces H5P — not just extends it

Of course, H5P could still be used in the production process. It could remain a familiar editor in which authors assemble tasks, place media, and roughly model interactions. The decisive question would then be what comes out at the end: not primarily an H5P package as the final form, but a semantic model that can be exported, reviewed, ported, and rendered in different runtimes.

That would be a different role for H5P. It would no longer be the target system and central production logic, but one possible authoring frontend for a more open task model. If H5P remains the form into which all content has to be brought, the basic problem remains unchanged.

The new model reverses the perspective:

- H5P is no longer the target system.
- The semantic task is the actual asset.
- AI skills support authoring, review, porting, and extending the component base from the side.
- Renderers are interchangeable.
- AI and tutor systems access the task through defined, optional interfaces.
- If those interfaces are missing, the task remains usable as a normal LMS or web interaction.
- Quality assurance happens at the level of data, AI skills, components, and runtime.

This does not make H5P wrong. It makes H5P optional. It could remain an export target, but it would no longer be the central production logic.

## Advantages of such an architecture

### 1. More dynamism

Tasks can generate variants, adapt hints, differentiate feedback, or take tutor context into account without every variant having to be maintained manually as a separate package. But this dynamism is not mandatory: in simpler target systems, the same task can run as a static or lightly interactive exercise.

### 2. Better standardization

If tasks follow a semantic schema, they can be checked automatically:

- Are learning objectives present?
- Are licenses documented?
- Is feedback available?
- Is accessibility information present?
- Is the task unambiguous?
- Is metadata complete?

### 3. Better quality assurance

AI skills can enforce checks. Renderers can be tested centrally. Tutor wrappers can control which AI interactions are allowed. Quality then emerges along the entire pipeline, not only in the finished package.

### 4. Platform independence

The same semantic task can be rendered in different contexts:

- web,
- LMS,
- app,
- video,
- tutor chat,
- assessment system,
- OER repository.

### 5. Better AI integration

AI is not used only as an authoring assistant that writes content into a form. It can be integrated into the production and runtime architecture — but as an optional capability, not as a mandatory part of every task:

- generation before publication,
- review before publication,
- adaptive help during work,
- reflection questions after work,
- analysis of misconceptions,
- suggestions for revision.

## What remains open

This architecture does not automatically solve all problems. On the contrary, it makes some questions visible that H5P often hides.

Open questions include:

- Which semantic format is broad enough and still practical?
- How far can we build on QTI, 1EdTech, xAPI, Caliper, or LRMI?
- Where is a pragmatic custom profile needed?
- How are AI skills versioned, reviewed, and documented for different target systems and component libraries?
- Who reviews the quality of AI-generated tasks?
- How are data protection and runtime AI interaction governed?
- Which data may a tutor system see?
- How do we prevent adaptive help from becoming a black box?
- How do we ensure that tasks remain meaningful without AI/tutor integration?

These questions are more productive than asking whether H5P needs a few more content types.

## Conclusion

H5P was important because it brought interactivity into learning platforms. But the next step is to release interactivity from individual learning-platform tools again.

The future does not lie in ever more manually maintained H5P packages. It lies in semantic task formats, AI-supported authoring, review, and porting skills, reusable renderer libraries, and controlled interfaces to AI and tutor systems.

Or, more pointedly:

> H5P is not dead because interactive learning content is disappearing. H5P is dead if its main function is to produce semantically poor packages through forms.

The better alternative is not a new authoring tool. The better alternative is a new production and runtime architecture for interactive learning content.
