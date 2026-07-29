---
title: "Never Underestimate Operations in the Cloud Era"
date: 2026-07-29
draft: false
description: "Why operations remains the underrated foundation of digital sovereignty even in the cloud era: a look at the 2026 Lünendonk study, BSI Grundschutz and C5, IT security in the AI age, the PCI project, and the pitfalls of dynamic cloud pricing."
summary: "Cloud changes who runs operations – not whether operations is needed at all. A piece on provider responsibility, BSI Grundschutz and C5, fast security rollouts in the AI age, the PCI project, and why good cloud must never cost more than an equivalent on-prem solution."
tags: ["cloud", "IT security", "digital sovereignty", "infrastructure", "operations"]
translationKey: "operations-in-the-cloud-era"
heroImage: "/img/blog/betrieb-im-cloud-zeitalter/hero-betrieb-fundament.svg"
heroAlt: "A cloud floats above a solid foundation of stacked operating blocks; two small figures with a wrench and a monitoring panel keep the foundation running."
---

> Thesis: Cloud doesn't change whether someone runs operations. It only changes who runs it, how visible it is – and how expensive it gets to ignore it.

"Serverless," "managed," "as a service" – the language of cloud makes it sound as if operations is gradually disappearing. That's one of the most expensive mistranslations in digitalization. Operations doesn't disappear. It shifts, becomes less visible, sometimes moves to a different organization – but someone still patches systems, watches load spikes, plans capacity, manages access rights, tests recovery, and pays the bill. Anyone who thinks clicking "cloud" makes the operations question go away has only lost visibility into it, not the responsibility for it.

That's what this post is about: why operations doesn't get smaller in the cloud era, only differently distributed – and why that distribution should be a deliberate design choice, not something that just happens by accident.

## What the Lünendonk study shows – and what it leaves underlit

Earlier this year, together with Christian Leinweber from MaibornWolff, I contributed a piece to the [2026 Lünendonk study "Digital Sovereignty – From Risk to Resilience"](https://www.luenendonk.de/produkt/luenendonk-studie-2026-digitale-souveraenitaet-vom-risiko-zur-resilienz/) – about our work on the Adaptive Intelligent System (AIS), the teaching and learning environment that FWU operates on behalf of the German states for general education schools. The study itself gives a good picture of where digital sovereignty stands across the DACH region: 155 interviews with IT leaders, GRC and security roles, procurement, and C-level executives. One finding that didn't surprise me but stuck with me anyway: when it comes to strengthening digital sovereignty, companies most often want external partners for training (95%), cloud migration (94%), and building governance structures (86%) – but only 47% want that support for ongoing IT operations. Operations is the area organizations are least likely to deliberately strengthen, even though it's the area where sovereignty is actually decided in the end: in an incident, in the moment a provider makes a call that isn't yours to make.

How real that moment can be is illustrated by an event the study cites from July 2025: before the French Senate, Microsoft France's chief legal counsel had to admit there is no guarantee that EU data won't be transferred to the US. 83% of surveyed companies consider a "kill switch" scenario – a provider unilaterally restricting access to critical services – a realistic risk. Only 57% actually have an exit strategy for it. That gap between perceived risk and actual operational readiness is, for me, the core of the issue: sovereignty is treated too often as a procurement or architecture question, and too rarely as an operations question.

In my contribution to the study, I tried to make exactly that point for education: we deliberately build AIS "cloud native" on open technologies like Kubernetes, because that makes it possible to run a vendor-independent operating infrastructure of comparable quality – without giving up professional, distributed operations. As an engineer, avoiding redundancy and reducing or deliberately distributing complexity, rather than hiding it, comes naturally to me. What I think the study could have surfaced more strongly: digital sovereignty without a resilient operating model stays a statement of intent. The rest of this post is my attempt to fill that in, at four points that give me the most headaches in practice.

## BSI Grundschutz and C5: shifting responsibility, not conjuring away effort

Two frameworks come up in almost every procurement conversation: BSI IT-Grundschutz and the BSI's Cloud Computing Compliance Criteria Catalogue (C5). Grundschutz is a process-oriented framework for your own organization – building blocks, protection-needs assessment, catalogs of measures. C5 is a requirements catalog specifically for cloud providers, verified through an auditor's attestation confirming the implementation of controls for security, availability, and transparency.

My conclusion here hasn't changed: solve as much as possible at the provider level. The classic comparison is Kubernetes. Running your own cluster means owning node patching, certificate rotation, etcd backups, network segmentation, CVE monitoring of the control-plane components, and disaster recovery – day after day, weekends included. Using a managed Kubernetes service from a C5-attested provider instead shifts exactly those tasks to an organization that has professionalized them for hundreds of customers at once and is regularly audited externally. That's usually safer, cheaper, and more reliable than any single organization could manage on its own.

But – and this is worth adding, because it gets glossed over in a lot of procurement decisions – that effect isn't automatic, and the effort doesn't vanish, it just moves. A C5 attestation is a snapshot, not a running guarantee; it has to be renewed regularly and actually read, not just filed away. Mapping Grundschutz building blocks onto a concrete cloud architecture is real, recurring work, not a formality. And responsibility ends where the provider's delivery ends: application security, configuration of your own workloads, identity and access management for your own users, data classification – that always stays yours, no matter how good the underlying C5 attestation is. Looking at this realistically means: provider responsibility meaningfully reduces effort, but it never replaces your own duty of care to actually read attestations, verify controls, and keep your own layer clean. Ignore that, and you're trading real security for a good feeling.

## IT security in the AI age: finding faster means having to react faster

One point that I think gets framed too negatively in the public debate about AI and security: AI-assisted code analysis and automated fuzzing now find more vulnerabilities than before. That's good news first, not bad news. Those gaps existed before, too – they were just undiscovered, which isn't safer, only less visible. More discovered vulnerabilities mean more chances to close them before they get exploited.

The catch is the flip side of the same development: when attackers use the same tools to find vulnerabilities and automate exploits, the window between disclosure and active exploitation shrinks dramatically. That's exactly why response speed becomes the actual security property – more important than any single preventive measure. And that applies equally to two layers that, in practice, often don't get taken equally seriously:

- **The supply chain**: the packages, base images, infrastructure components, and external services you use. This needs complete software bills of materials, automated dependency scanning, and – above all – the organizational ability to roll out a critical update within hours, not in the next sprint.
- **Your own code**: it's tempting to hide behind the supply chain here, because your own codebase feels smaller and more familiar. That's exactly what makes it a blind spot. Code you wrote yourself needs the same continuous scanning, review, and – once a vulnerability is found – the same standard for fast rollout as a third-party dependency.

The decisive capability, then, isn't "have as few vulnerabilities as possible" – that's an illusion – it's: once something is found, the fastest possible rollout has to be achievable. Ideally automated, triggered by a CI/CD pipeline, without manual special approvals that cost hours in an emergency. And ideally backed by full end-to-end tests that create enough confidence to ship an emergency patch to production without days of manual re-checking. Organizations that lack this capability don't lose in the AI age because of a single vulnerability – they lose because too much time passes between discovery and fix.

## The PCI project: shared operations instead of sixteen special paths

A concrete example of deliberately pooling operational responsibility is the [PCI – Pädagogische Cloud-Infrastruktur (Educational Cloud Infrastructure)](https://pci.schule/) project, which I'm involved in through various committees. PCI is a cross-state initiative under Germany's DigitalPakt Schule program, led by Hamburg together with Berlin, Bremen, Hesse, North Rhine-Westphalia, and Rhineland-Palatinate. The goal: a shared, sovereign cloud operating platform for educational applications that's as capable as major hyperscaler offerings, but stays under joint, public control.

Technically, applications within PCI get their own logically separated environments; shared services like cluster operations, security mechanisms, and monitoring are provided by PCI as a common base, while responsibility for the actual applications stays with the states and vendors. For the first time, states are jointly discussing and defining minimum criteria for hyperscalers and other cloud providers; operating environments are standardized and hardened, and documented in coordination with state data protection authorities. Interoperability and consistently avoiding vendor lock-in aren't a nice-to-have here – they're an explicit goal.

What I particularly like about PCI is its underlying stance: federalism isn't used as an excuse to build every piece of redundancy separately, but treated as a requirement for intelligent design. States stay in the driver's seat for state-specific decisions – but the same recurring operational groundwork no longer gets reinvented sixteen times over. To me, PCI is a direct example of this post's thesis: you can pool operations, professionalize it, and hand part of it off to a shared platform – but you can't abolish it. Someone operates PCI, and that job needs just as much care as operating every individual application used to.

## The challenges of cloud: dynamic pricing and SaaS pricing

Maybe the most underestimated operational issue isn't technical at all, but economic: well-built cloud must never cost more than a classic on-prem solution with comparable scale-out options. That sounds obvious, but in practice it gets ignored constantly – often because nobody does the math, and "cloud" becomes an end in itself.

Two measures matter most here:

1. **Scale down consistently, not just up.** Scaling up during load spikes comes easily to almost everyone, because it's visible and urgent. Scaling down – at night, on weekends, during school holidays – gets implemented consistently far less often, even though that's exactly where cloud's economic advantage over fixed-size on-prem hardware lies. Unused capacity that keeps running is simply wasted money in a cloud model.
2. **Buy permanently needed resources separately.** For baseline load that's needed continuously anyway, on-demand pricing rarely pays off. Reserved instances or comparable commitment models are often significantly cheaper – provided you actually know your baseline load and don't book everything on-demand out of convenience.

Cloud must never be an end in itself. If a cloud solution costs more than a classic solution that covers every realistic load peak while being just as resilient, secure, and comfortable, something is wrong – with the architecture, the procurement, or both. Dynamic pricing becomes the real problem once an organization has to follow classic budget logic with fixed annual budgets. That combination – variable costs meeting rigid budgets – needs precise, continuous monitoring and ongoing cost management, not as a one-off project but as a permanent task.

And here lies the actual danger: cost pressure must never lead to cutting reach, usage frequency, usage intensity, or meaningful features of a service just to avoid additional infrastructure costs. An educational offering that gets artificially throttled for cost reasons has missed its actual purpose – even if the cloud bill looks good at month's end. Cost control is an operational discipline. It must never become a product decision by the back door.

## Infobox: a holistic operating model

<figure class="jr-contained-figure jr-schema-figure">
  <img class="jr-contain-image" src="/img/blog/betrieb-im-cloud-zeitalter/betriebsmodell-schichten.svg" alt="Layer model of holistic cloud operations: infrastructure with managed Kubernetes as the foundation, above it managed services, observability and recoverability, security and identity, and at the top governance and cost.">
</figure>

*Five layers of a holistic operating model – the share of your own domain responsibility grows from bottom to top.*

At the base sits **infrastructure**, ideally managed Kubernetes rather than a self-maintained cluster. On top of that come **managed services**: database as a service (DBaaS), automatic scaling, infrastructure as code, so environments stay reproducible instead of hand-maintained. The next layer provides **observability and recoverability**: monitoring and logging, backup and restore, and GitOps tools like ArgoCD or Flux, so a target state can always be restored automatically. Above that sits **security and identity**: identity and access management, clean secrets management, and automated patch rollouts. At the top sits **governance and cost**: FinOps and cost monitoring, capacity planning, and – not to be forgotten – a documented exit strategy in case a provider switch becomes necessary.

The trick isn't building every layer yourself. The trick is deliberately deciding, for each layer, how much of it a vetted provider takes on and how much control has to stay in-house – and documenting that decision instead of letting it happen by default.

## Cloud doesn't make operations easier – it makes it shareable

To sum it up for myself: cloud doesn't mean operations gets easier. But it does allow distributing the complexity of operations across different shoulders – onto providers with a C5 attestation and economies of scale, onto shared platforms like PCI, onto automated pipelines instead of manual steps. That's real progress. But distributing is not the same as disappearing.

Anyone who sells cloud as a replacement for operations is promising something that won't hold up. Anyone who understands cloud as a tool for distributing operations more professionally, more verifiably, and more economically is using it right. That distinction, in the end, is what decides whether digital sovereignty becomes more than a good intention in a study.
