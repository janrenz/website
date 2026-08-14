---
title: "AI‑assisted content production: Think out loud, produce in code"
date: 2026-08-13
description: "An experiment: spoken video → transcript → AI generates HTML mini‑films with Hyperframes → video export. The deliberate choice: video as the output, code/HTML as the production format."
summary: "From slide‑plus‑speaker to a production core in code: speak ideas freely, transcribe, structure, generate with Hyperframes, export as video."
tags: ["Content production", "AI", "Video", "Workflow", "Hyperframes"]
translationKey: "ki-content-production"
heroImage: "/img/blog/ki-content-production/hero-ki-content-abstract.svg"
heroAlt: "Abstract illustration: idea becomes structured code – calm, geometric forms without process graphics"
---

> Thesis: Video is best treated as a universal output – not necessarily the production format. Produce in text and code; export video at the end.

## Starting point: Slide‑plus‑speaker was good – and expensive

At HPI, we produced slide‑plus‑speaker courses for years. Polished decks. Studio recordings. Post‑production. Quality control. The result was professional – but heavy.

This experiment goes the other way. I speak freely on camera. The recording becomes a transcript, the transcript becomes structured sections – small HTML “mini‑films,” built with Hyperframes. At the end there’s a video again: exported from code, not cut in an editing suite.

{{< video src="/video/hyperslide-demo.mp4" poster="/img/blog/ki-content-production/hero-ki-content-abstract.svg" label="Hyperframes demo" note="Video in German" >}}

## Why code/HTML is the better production format

Code is changeable without a reshoot. While writing this post, I wanted to fix a phrase in the video. I didn’t reshoot. I edited the text in code and exported again.

Code is also diff‑friendly. I can track changes, review them, automate them – the way I would in software, not the way I would in video editing.

And code carries accessibility in the format itself. Semantics, alt text, and responsive layouts aren’t added afterwards – they’re built into the output. For learners who rely on screen readers or captions, that’s not a nice‑to‑have. It decides whether they can use the content at all.

That doesn’t mean NLEs disappear. For individual, high‑production pieces, classic video editing remains the right tool. But for recurring explainer, product, or learning content, code/HTML as the core is often more efficient. Video stays the universal distribution format.

## Hyperframes: an open‑source building block, not a monolith

Hyperframes is an open‑source tool. It describes sections as code and generates presentation‑ready HTML artefacts. In this experiment, I don’t use it as a finished end system – I use it as one building block in a pipeline: transcript, structured sections, generated mini‑films, video export.

Combined with MCP‑capable tools, parts of this could be automated in the future – proposing sections, choosing layouts, checking assets. That’s not there yet. I don’t want to claim more than the current setup actually supports.

## Video or code at the center – my answer: code

Video as a production format has real strengths: performance, image work, millisecond‑precise timing. Its weakness shows up at corrections, variants, versioning.

Code/HTML as a production format flips that. Its strength is structure, variants, review, automation. Video becomes the export – robust, universal, platform‑compatible.

For this experiment, I deliberately choose code/HTML as the production format. Video stays the output, not the starting point.

## Transparency and limits

Two things belong to the transparency of this experiment. The embedded video is in German; that’s clearly marked on this English page. And: AI supported drafting and editing. Responsibility and approval remain with me.

If I sum this up for myself: video is still the right output format. It’s just no longer where I produce. I produce in code. I export as video. For recurring formats, that’s the more practical path for me.
