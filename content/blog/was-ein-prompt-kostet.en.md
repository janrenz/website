---
title: "What a Prompt Really Costs"
date: 2026-08-18
draft: true
description: "Trashing AI doesn't help anyone. But if you use it, you should know what resources a prompt actually takes — and how to save tokens without giving AI up."
summary: "Every AI request consumes electricity, water, and compute time — how much depends heavily on model, provider, and usage. An overview of what the research shows, why agentic workflows are especially token-hungry, concrete ways to save tokens, why models and providers differ, and when local models running on your own renewable power are the better choice."
tags: ["AI", "sustainability", "climate protection", "agentic AI", "infrastructure", "digital sovereignty"]
translationKey: "what-a-prompt-really-costs"
heroImage: "/img/blog/was-ein-prompt-kostet/hero-was-ein-prompt-kostet.png"
heroAlt: "Abstract editorial illustration of a data center whose cooling towers exhale chat speech bubbles instead of steam; in the foreground a power line connects the data center to a small solar installation."
---

> Thesis: Trashing AI doesn't help anyone. But if you use it, you should know what a prompt actually costs — and act on it.

I type a question into a chat window. Two seconds later, the answer is there. What I don't see: somewhere a server rack is running hot, because in those two seconds it performs billions of computations. The resulting heat has to be actively removed. The electricity for it came from a grid with a very specific, very different carbon footprint depending on where you are. The prompt feels free. It isn't.

I don't want to trash AI here. I use it myself every day, professionally and privately, and consider it one of the most useful tools I've come across in years. But that's exactly why I think: if you use a tool daily, you should know what it costs. Not to use it less. To use it more deliberately.

## Why a prompt costs anything at all

A language model doesn't look up an answer. It computes it — token by token. For every single word or word fragment it outputs, a full pass runs through a network with often hundreds of billions of parameters. That happens on specialized chips that continuously convert electricity into heat. The longer the answer, the more often this process repeats.

<aside class="jr-infobox">
  <p class="jr-infobox-label">Quick explainer</p>
  <strong class="jr-infobox-title">What is a token?</strong>
  <p>A token is the smallest unit of text a language model computes with — often a word fragment, sometimes a whole short word. "Sustainability", for example, is two or three tokens, not one. Every input token gets processed, every output token gets computed fresh. More tokens means more computation steps, more energy, more time.</p>
</aside>

Then there's the infrastructure around it: cooling, networking, redundancy for failures, capacity that sits ready even when it isn't needed. How much extra energy a data center needs beyond raw compute is usually expressed as a PUE value — Power Usage Effectiveness. A PUE of 1.5 means: for every kilowatt-hour that actually reaches the chips, another half a kilowatt-hour is spent on cooling and operations. Data centers vary considerably here, depending on age, cooling technology, local climate, and utilization.

## What the research actually shows — and what it doesn't

Numbers on individual models' energy use often sound impressively precise. They rarely are. Consumption depends on the model, the hardware, utilization, response length, the data center's location, and the time of day. Deriving an exact ecological footprint from a single model name would be irresponsible. Two studies still show which direction the differences run.

Sasha Luccioni, Yacine Jernite, and Emma Strubell measured 88 AI systems across ten different tasks in 2024's [„Power Hungry Processing"](https://arxiv.org/abs/2311.16863). Among the roughly 30 systems deployed in production, energy consumption per query varied by a factor of 65 — for comparable tasks. Their central finding: multi-purpose generative models often use orders of magnitude more energy than specialized systems built for a single task — even when you hold the parameter count constant. Using a generative model for a simple classification task is, technically speaking, waste.

Google published the first production-grade measurements in 2025's [„Measuring the environmental impact of delivering AI at Google Scale"](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference): a median text prompt in the Gemini app consumes 0.24 watt-hours, causes 0.03 grams of CO2 equivalent, and needs 0.26 milliliters of water. What's notable isn't the absolute number but the trend: within one year, energy use per prompt dropped 33-fold according to Google, and carbon output dropped 44-fold — through more efficient software and deliberate purchasing of clean energy. That shows: a request's footprint isn't a fixed constant of nature. It's an engineering and procurement decision a provider makes — or doesn't make.

## Thinking costs more: reasoning models and the price of deliberation

In late 2025, Hugging Face released the second version of its [AI Energy Score](https://huggingface.co/blog/sasha/ai-energy-score-v2), this time focused on reasoning models — models that run a visible or hidden "thinking process" before the actual answer. The result: with reasoning enabled, the same models use 30 times more energy on average than without. For individual models, the difference ranges between 150 and 700 times. The reason is simple: reasoning models generate between 300 and 800 times more output tokens, because most of that goes into the — usually hidden — thinking process, not the actual answer.

That confirms a point I already made in an [earlier post on model selection](/blog/modellwahl-braucht-infrastruktur/): not every request needs the most capable model. Running a simple classification or formatting task through full reasoning mode is a bit like starting up a truck for a short trip and letting it idle for half an hour first.

## Agents are even hungrier

I work with agents like Claude Code every day myself — tools that don't just deliver an answer, but autonomously read files, run commands, check results, and try again if needed. That's exactly where a cost driver appears that doesn't come into play with a single prompt.

An agent works in a loop: read, act, evaluate the result, continue. Every intermediate step — every file read, every tool output, every intermediate state — stays in the context and gets resent and reprocessed at every following step. A task that feels like ten small steps can add up to several hundred thousand tokens this way, because it's not just the last step that gets billed, but the entire history accumulated so far — at every single step, again. Industry analyses from 2026 put the difference to a single chat reply at 10 to 100 times more tokens for comparable tasks, depending on how many tool calls and correction loops a task goes through.

For me, that means: the same care I put into a single prompt, I need to put into an agent task even more. Scope a task narrowly instead of "take a look at the whole project." Don't run the same test three times because you don't trust the result. End a session once the goal is reached, instead of letting the agent keep spinning. This isn't an argument against agents — I wouldn't use them daily if they didn't save me enormous amounts of time. But my time savings aren't automatically a resource saving overall. Both need to be thought through together.

## How to save tokens without giving up AI

Saving tokens doesn't mean using AI less. It means using it more deliberately. A few levers that actually make a difference in everyday use:

- **Write precisely instead of expansively.** A clearly scoped prompt needs fewer follow-up questions and produces fewer answers you end up discarding.
- **Only turn on reasoning when the task needs it.** For summaries, rewording, or simple extraction, a model with no or minimal thinking mode is usually plenty.
- **Pick the smallest sufficient model**, instead of defaulting to the biggest one when in doubt. More on that in the post on model selection mentioned above.
- **Cap response length** where a short, structured answer is enough. A concise JSON object costs fewer tokens than three paragraphs of prose carrying the same information.
- **Reuse context instead of rebuilding it every time.** Staying in an ongoing conversation saves compared to many isolated individual requests that each resend the background.
- **Refine precisely instead of regenerating from scratch.** An answer that's 80 percent right needs a targeted correction — not a complete prompt restart.
- **Scope agent tasks narrowly.** A clearly bounded task instead of "take a look at everything" — every unnecessary tool round gets recomputed at every subsequent step.

Even small habits have measurable effects. A study from this year measured [the energy cost of a polite "thank you"](https://arxiv.org/abs/2601.22357) sent to a language model: the reply to it consumes 0.245 watt-hours on average — enough to power a 5-watt LED bulb for almost three minutes. This isn't a call to be rude. It just shows that every exchange — even a reflexive one — actually costs something, however little.

## Providers and models are not the same

The Google numbers above already show it: the exact same task can have a very different footprint at different providers. Three factors decide this:

First, the **electricity mix at the data center's location**. A data center in a region with a high coal share in the grid causes significantly more CO2 per kilowatt-hour than one in a region with a high hydro or wind share — regardless of how efficient the hardware itself is.

Second, **hardware and cooling efficiency**. Newer accelerator generations often deliver significantly more performance per watt than their predecessors. A modern, well-utilized chip in an efficiently cooled data center can be a multiple more efficient per query than the same task on older hardware.

Third, **the purchase of clean electricity**. Some providers deliberately buy certified renewable electricity or invest directly in new renewable capacity. That's the lever behind most of Google's 44-fold carbon reduction.

For users, that means: providers who report transparently on their footprint and demonstrably reduce it deserve credit for it — and an edge in the choice. A provider that doesn't publish such numbers at all is making a statement of its own by that omission.

## Local models running on your own renewable power

One path I find especially interesting: running smaller, open models locally — on your own laptop, a home server, or small local infrastructure. The appeal isn't just about not sending data to an external provider. The appeal is being able to choose the power source yourself.

Anyone with a solar installation who has surplus electricity at midday that would otherwise be fed into the grid or curtailed can run a local model exactly in that window. That electricity would otherwise barely have been put to good use, if at all. Put differently: not every kilowatt-hour is equally scarce. A kilowatt-hour from surplus midday solar power has a different value than a kilowatt-hour from a fossil-heavy grid during the evening peak.

One caveat belongs here: consumer hardware is usually less efficient per token than specialized data-center accelerators. A local model running on ordinary grid power isn't automatically the greener choice — it depends on where the electricity comes from, not just where the computation happens. The real win only shows up in the combination: local model plus genuinely renewable, otherwise unused electricity.

## A short detour: the lazy reach for AI

An honest observation about myself: sometimes I'm too lazy for a one-line terminal command and have an agent run `git status` instead, or rename a file. Typing the command myself would take three seconds. The detour through AI costs a full model invocation — load context, process the request, generate a reply, execute the command — for something that would have been just as fast to type directly.

This isn't an argument against AI agents that handle tasks autonomously — that's what they're built for, and for genuine multi-step tasks it pays off. It's a reminder that not every task is an AI task. Sometimes the most sustainable AI decision is not to use AI at all — simply because the human is faster and cheaper.

## Conclusion

I don't think the answer to AI's resource use is abstinence. I think it's transparency. Models and providers disclosing what their systems cost. Letting users understand how tokens, reasoning modes, and response length relate to each other. And then deciding deliberately: the smallest fitting model, the right moment, ideally your own midday solar power — or simply typing the terminal command yourself.

> Not every prompt has to cost the earth. But every prompt has a price — and you should know it.
