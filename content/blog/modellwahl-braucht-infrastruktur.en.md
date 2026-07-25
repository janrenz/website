---
title: "Lost in the Model Jungle"
date: 2026-07-14
draft: false
description: "Why model selection is becoming an infrastructure task: models evolve rapidly, their strengths differ — and people shouldn't have to operate a model menu for every single request."
summary: "Choosing an AI model determines quality, cost, latency, and resource use. Instead of leaving users alone with an ever-growing model menu, what's needed is a lean, transparent routing layer: it classifies requests and, within clear rules, picks the smallest model that fits."
tags: ["AI", "infrastructure", "digital sovereignty", "governance"]
translationKey: "model-selection-needs-infrastructure"
heroImage: "/img/blog/modellwahl-braucht-infrastruktur/hero-modellschungel-routing.png"
heroAlt: "Abstract editorial illustration of a model jungle made of different AI components; a central routing node connects a request to matching processing paths."
---

> Thesis: Good AI use doesn't mean always calling the most capable model. Good AI use means picking, for a concrete task, the smallest model that can reliably solve it — without leaving users alone with that decision.

Open an AI application today and you'll often see a model menu. Fast. Precise. Creative. Reasoning. Mini. Pro. Open. Proprietary. On top of that come context windows, tool use, image and audio capabilities, privacy options, and pricing tiers. For people who work with models professionally, that can make sense. For most everyone else, it's a burden.

Because the real question is rarely: *Which model do I want to use?* It's: *Can you help me get this task done well?*

That's exactly where an infrastructure task lies. Model selection must not become a new digital-literacy hurdle. It has to happen in the background — traceably, frugally, and correctably.

## A year that reshuffled the model landscape

The pace of development has itself become a problem of orientation. Within a few months, new model generations appear, along with smaller and larger variants, specialized reasoning models, multimodal models, and new open weights. What counted as a flagship model yesterday might be a solid standard for demanding text work today — and just one option among several tomorrow.

The field isn't simply a ranking from "weak" to "strong."

- **Proprietary models** are operated as a service. They can be very capable and evolve quickly; at the same time, operation, pricing, data processing, and technical dependencies are tied to the respective provider.
- **Open models**, or models with open weights, create a different kind of latitude: they can be run, adapted, and audited in your own or a controlled environment. But that doesn't automatically mean they're the cheapest or best choice for every task. Operations, evaluation, security, and updates remain real work.
- **Model families** are not themselves a single performance class. GPT-5.6 illustrates this concretely. The line is currently organized into three capacity tiers. **Luna** is the efficient, fast tier for high request volumes, classification, chat, and light agentic workflows. **Terra** forms the balanced middle for everyday coding, reasoning, and multi-step work. **Sol** is the high-capability tier for complex analysis, coding, and agentic tasks. Each of these three tiers is additionally available as a **Pro** variant. According to the published description, this is not a completely different base model, but the same respective tier with a reasoning mode aimed at higher quality on complex tasks. So even a single family name doesn't stand for *one* model — it stands for at least six usable routes: efficient, balanced, or high-capability, each in standard or Pro mode.

  The differences don't stop at the model tier. For all three GPT-5.6 tiers, further parameters can influence how a request is processed: a reasoning or reasoning-effort mode, a maximum response length, structured output formats, the use of tools, and the choice — or mandate — of a specific tool. A concrete routing policy would therefore not just say "GPT-5.6 Terra," but, for example: "Terra, limited response length, structured JSON, medium reasoning effort, research tool allowed." The context window and multimodal inputs — text, image, and file — are likewise part of technical fitness, but they don't replace a substantive selection. What matters is not the label, but whether the fully configured route actually fits the task.
- **Specialized models** can be especially useful for particular formats: for instance, speech, image, code, translation, retrieval, embeddings, or a narrowly defined classification task.

This diversity is progress. It prevents any single model from becoming the sole yardstick. But it also creates a new kind of complexity: the model landscape changes faster than ordinary users can reasonably evaluate it.

Who is supposed to decide, in day-to-day work, whether a short summary needs only a small model, whether a contract analysis calls for a stronger model plus additional source-checking, or whether a sensitive request may only be processed in a particular operating environment? Who is supposed to re-weigh price, latency, quality, privacy, and environmental impact with every new model release?

The honest answer is: you can't delegate that to every individual person.

## Why the right choice matters

A model that's too small can misread a task, miss important constraints, or turn complex material into an answer that's too superficial. But a model that's too large is not a neutral, safe choice either.

Larger or more elaborately operating models can incur higher costs, need more compute time, and consume more energy. Exactly how much resource use is involved depends on the model, the hardware, utilization, response length, the data center's location, and other factors. Precisely because of that, it would be irresponsible to derive an exact ecological footprint from a model name alone. Still, the direction is clear: compute is not free — neither financially nor ecologically.

A good model choice has to weigh at least four goals at once:

| Goal | Guiding question |
| --- | --- |
| Quality | Is the answer reliable enough, substantively and formally, for this task? |
| Proportionality | Is the system using no more model capacity than necessary? |
| Operations | Do latency, availability, data processing, and cost fit the context of use? |
| Responsibility | Are privacy, protection needs, traceability, and resource impact accounted for? |

This is not a case for cut-rate AI. It's a case against the habit of answering every uncertainty with the largest available model.

If a small, well-evaluated model can reliably classify a request, detect a language, extract an appointment, or bring a text into a clear structure, it would be wasteful to automatically deploy the most compute-intensive model for that. Conversely, a demanding task must not be routed, out of frugality, to a model that can't meet its requirements.

So the right question isn't: *Which model is the best?* It's: *Which model is the best fit, under these conditions?*

## Model choice is too context-dependent for people to handle alone

Model menus create the impression that the decision is simple: you look at a few names and pick one. In reality, it depends on context that a menu can hardly convey.

A single request can, for example, involve all of the following at once:

- a simple linguistic rephrasing,
- a sensitive document,
- the requirement to verify current sources,
- a desired answer in plain language,
- a tight deadline,
- an internal data-processing rule,
- and the wish for a traceable rationale.

The appropriate model doesn't follow just from the topic. It follows from the task, the risk, the format, the tools required, the language, the protection needs, the desired depth, and the quality bar.

On top of that: users know their task, but not necessarily the current strengths and weaknesses of every model variant. They should be able to describe their intent. The system has to turn that into a good technical decision.

This is comparable to other kinds of infrastructure. Nobody expects a teacher to pick a routing protocol before every video call. Nobody should have to read a benchmark archive before summarizing a text. Good infrastructure doesn't make complexity invisible, but it takes the wrong kind of responsibility off people's shoulders.

## A lean model classifier as a routing layer

Our approach, then, would not be yet another large general-purpose model sitting in front of every prompt. On the contrary: at the start sits a **small model classifier**.

This lean model — or rule-based/AI hybrid — looks at the request and classifies it. It doesn't answer the actual substantive question. At first, it only decides which processing route is appropriate.

Simplified, the flow could look like this:

1. The request is classified by **task type**: for example, summarization, translation, research, code, creative concepting, extraction, image description, or complex analysis.
2. The classifier assesses **complexity and quality needs**: Does a direct, short answer suffice? Does the task require multiple steps, tool use, or particular care?
3. It takes **framework conditions** into account: protection needs, allowed operating environment, language, desired output format, response time, and cost budget.
4. A central routing policy maps these characteristics to a suitable model class and configuration.
5. The system picks the **smallest suitable model**. Only when the request requires it does it escalate to a stronger route.

The crucial point: the classifier doesn't have to be the smartest model in the system. Its job is narrowly scoped. That's exactly why it can be small, fast, and cheap. Where possible, the initial classification can additionally be handled by clear rules: sensitive data must not leave certain routes. A request with a current-sourcing requirement needs a research route. A pure extraction task shouldn't end up on an expensive reasoning model.

## What OpenRouter already demonstrates — and why that's not enough yet

Services like OpenRouter show that model routing is already practically viable. The **Auto Router** offered there analyzes a prompt and picks a suitable route from a curated set of capable models. According to its own documentation, this takes into account, among other things, prompt complexity, task type, and model capabilities. The router is operated by NotDiamond; the response indicates which model was actually used.

That solves an important baseline problem: an application no longer has to be hard-wired to a single model for every request. The model pool can be restricted, for instance to certain providers or model families. A cost-quality corridor can also be configured. And OpenRouter separates the question of **model choice** from the question of which **provider endpoint** a model runs on: provider routing can steer by price, throughput, latency, or data policy, and fall back to allowed alternatives on outages.

That's useful, and for many general applications a good default. Session binding is sensible too: within a conversation, the chosen model and provider route can be kept for a limited time. That produces more consistent answers and can make better use of caches.

For our use case, though, this kind of general prompt routing isn't enough. At its core, it answers the question: *Which model is likely to fit this prompt?* We have to answer a further-reaching question: *Which processing route — pedagogically, substantively, legally, and operationally permissible — fits this concrete task for these concrete learners?*

An example: "Explain fractions" is not a single task. For a third-grade class, it might be about intuitive foundational concepts using pizza or paper-strip models. In seventh grade, the task might involve adding fractions with unlike denominators and typical misconceptions. In upper secondary, the same phrasing might be part of a formal review or a diagnostic task. A general router might well recognize that a simple explanation is enough. But it doesn't automatically know the grade level, the state, the subject curriculum, the learning objective, the material already available, language proficiency, support needs, the permissible depth of help, or whether the AI is supposed to explain a solution, generate a task, diagnose a competency, or merely formulate feedback.

Exactly this information must not be guessed from the wording of a prompt alone. It has to be available — data-sparingly and traceably — as context: for example, from the selected grade level, the subject, a competency description, the task format, role and permission information, or deliberately set pedagogical settings. This context can be passed along as structured additional input on each individual call. But it can also persist as a controlled session or usage context — for instance, for as long as a learning group is working on a unit, or a teacher is preparing a series of tasks. The concrete question "Explain fractions" is then not routed in isolation, but evaluated together with the information the task actually requires. That context doesn't have to be spelled out again in every prompt; it just needs to be available to the routing layer clearly, currently, and correctably by users. Only this combination of request **and** structured context turns model routing into a substantively accountable choice.

## The mapping belongs in a transparent policy, not a gut-feeling algorithm

Behind the classifier sits a maintained mapping. It connects task types, complexity levels, and operational requirements to approved model routes and settings.

A simplified example:

| Request profile | Additional context | Suitable route | Possible settings |
| --- | --- | --- | --- |
| Short classification, extraction, format check | none or minimal additional data | small, fast model or rule-based processing | low response length, no tools |
| Summary of a clearly bounded text | purpose and desired length | efficient text model | limited context, structured output |
| Explanation or exercise in an educational context | grade level, subject, competency goal, support needs | pedagogically evaluated text/tutor route | age-appropriate language, defined depth of help, no impermissible solution-giving |
| Demanding subject-matter draft or complex analysis | domain, quality level, possibly approved sources | higher-capability model | more reasoning time, source/tool route as needed |
| Current factual question | currency requirement, approved sources | model plus research/source route | make sources visible, verify currency |
| Sensitive or specially protected content | protection needs, roles, and permitted data spaces | approved, controlled operating environment | data minimization, logging, local processing where applicable |
| Image, audio, or multimodal task | medium, rights and purpose context | specialized multimodal route | process only the required media |

This mapping is not a one-off configuration. It's a governance artifact. Models change, prices change, new open alternatives appear, quality measurements produce new results, legal requirements shift. That's why the routing policy needs versioning, accountability, regular evaluation, and documented changes.

## Escalation as a controlled workflow

The first answer must not be a deliberately undersized test run. The classifier picks, from the start, the smallest route assessed as sufficient for the task. Escalation is the exception: it kicks in when that initial classification doesn't hold up, the task changes, or defined quality criteria aren't met.

Part of this check can be automated. For structured outputs, you can check whether the agreed format is valid, whether required fields are missing, or whether required sources are documented. For pedagogical tasks, grade level, competency goal, and permissible depth of help can be checked against the output. Such checks don't necessarily require yet another large model; rules, schema checks, and small specialized verification steps are often enough.

Users still remain part of the process, though. After an answer, a brief checkpoint is enough: "Does this fit?" If needed, the person can do more than just "try again" — they can name the reason: too superficial, check sources, explain for grade 7, phrase in plain language, or restructure. The application translates that feedback into a concrete new route. That can mean more reasoning effort, a research function, a different output format, a more suitable model for the subject matter — or, only then, a more capable model tier.

A button like **"Try again with a different route"** makes sense as long as it doesn't blindly fire up the most expensive model. It should make clear what's changing: for instance "with source research," "with a stronger review route," or "rephrased for the given grade level." The second version stays visible as its own version; on request, it should be possible to trace which route was changed, and why.

In an educational context, a teacher might first receive an age-appropriate task idea. If they then add "differentiation for two proficiency levels," that's not simply a signal for a bigger model. The workflow switches into a pedagogical planning route that takes into account the competency goal, grade level, available material, and rules for hints or model solutions.

That feedback simultaneously improves the routing policy. Aggregated and evaluated in a data-sparing way, it shows where the initial classification has to be corrected too often, and where a more precise context signal is more effective than more model capacity. For consequential outputs, human sign-off or editorial review remains the final stage.

## Quality can't just be promised

A model router is only better than a model menu if its decisions can actually be checked. That requires evaluations with realistic tasks — not just general benchmark scores.

Things worth checking include:

- Does the chosen route reach the agreed quality for typical tasks?
- How often does it escalate to a large model unnecessarily?
- Where is it routing too frugally and losing quality?
- Which routes cause which latencies and costs?
- Are protection needs and operational rules reliably respected?
- Can users trace why a particular route was chosen?

The goal isn't perfect prediction. It's a learning, controlled infrastructure: small tasks stay small; complex tasks get the capability they need; sensitive content stays within permitted limits; and changes in the model landscape don't only become visible once individual people happen to stumble across them.

## Model choice is part of digital sovereignty

Anyone who treats model selection as a mere convenience feature is missing its political and infrastructural dimension. The decision about which model is used for which task affects cost, dependencies, data flows, energy use, and the ability to actually use alternatives.

A good router can therefore combine open and proprietary models sensibly. It doesn't have to pretend, for ideological reasons, that one category is always superior. But it should make transparent why a route was chosen, which requirements it meets, and what alternatives exist.

This matters especially for public and education-related infrastructure. Here, the answer to model diversity cannot be that every school, every agency, or every teacher has to run their own experiment with model lists, contracts, and data pathways. What's needed is a shared, verifiable set of selection rules, and infrastructure that puts those rules into practice.

The most interesting AI interface of the coming years might therefore look surprisingly unspectacular: not a cockpit full of model names, but a good input field. Behind it, a routing layer does the work — one that doesn't mistake quality for waste, and doesn't mistake sovereignty for manual overload.

> Not every request needs the biggest model. But every request deserves a fitting, accountable, and traceable decision.

## Open questions for further work

This draft deliberately describes an approach, not a finished reference architecture. For the next version, these questions in particular would need to be settled:

1. Which task classes and quality criteria should a first routing policy cover?
2. Which data- and protection-need classes rule out certain providers or operating models?
3. How is quality measured per task class, and how often is the mapping updated?
4. Which information about the chosen route should users see by default — and which only on request?
5. How can such routing be openly documented, evaluated, and made reusable across institutions?
