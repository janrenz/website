---
title: "My Teammate, the Agent"
date: 2026-07-28
description: "A personal essay on why AI agents today mostly work as isolated islands per person and per project — and what it takes for knowledge, skills, and context to actually reach the team instead of staying locked away."
summary: "Hardly anyone still works without AI support — but the agents behind that support usually remain isolated islands, tied to one person and one project. AGENTS.md helps share project knowledge, but only shared skills, shared context, and tools like Buzz from Block turn a collection of individual agents into an actual team."
tags: ["AI", "agentic AI", "teamwork", "infrastructure", "tools"]
translationKey: "my-teammate-the-agent"
heroImage: "/img/blog/mein-teamkollege-der-agent/hero-teamkollege-agent.svg"
heroAlt: "Abstract infographic of two isolated developer islands, each with its own AI agent, connected by a central bridge of shared skills and shared context."
---

*A personal essay on why my most important teammates are increasingly agents — and why that is an organizational problem, not a technical one.*

Even in teams that do not yet consistently work "agentic first," hardly any developer or other team member still works without AI support today. Autocomplete in the editor, the chat for a quick question, the agent that independently prepares a pull request: AI is no longer a special-purpose tool, it is part of the daily routine — whether or not an organization has strategically decided so.

<aside class="jr-infobox">
  <p class="jr-infobox-label">Quick explainer</p>
  <strong class="jr-infobox-title">What does "agentic first" mean?</strong>
  <p>A team works "agentic first" when AI agents are not just an occasional aid but are considered active participants in the workflow from the start: tasks are formulated, documented, and structured so that an agent can take them on independently — including its own access rights, its own history, and its own responsibilities, rather than merely acting as autocomplete for humans.</p>
</aside>

Yet this is exactly where a structural flaw of these decentralized AI setups shows up: the agents work in isolation. Each person has their own agent, their own chat history, their own settings. In the best case, an agent still has contextual knowledge from the concrete project — for instance in the form of an `AGENTS.md` that lets this knowledge flow back to other developers through the project repository. But cross-project learnings and context stay trapped on the individual islands of each developer.

<aside class="jr-infobox">
  <p class="jr-infobox-label">Quick explainer</p>
  <strong class="jr-infobox-title">AGENTS.md</strong>
  <p>AGENTS.md is a simple, open convention: a markdown file at the root of a repository that gives AI agents project-specific knowledge — build and test commands, code style, architectural decisions, things that cannot be inferred from the code alone. Unlike a README, it is aimed primarily at agents rather than humans — but it is used by everyone working in that repository. Originally pushed forward by OpenAI for Codex, the format is now supported by many tools and was handed over to the Agentic AI Foundation under the Linux Foundation at the end of 2025 — much like Anthropic's Model Context Protocol (MCP) or Block's agent framework Goose.</p>
</aside>

## When agents learn on their own, shared knowledge gets lost

The problem becomes especially noticeable when agents come with a self-learning feature that permanently stores the insights and preferences they pick up: how I like code reviews phrased, which shortcuts a team uses, which solution has already proven itself in a similar case. This is exactly where knowledge and synergy get lost, if that memory sits only locally with one person or one tool installation. A colleague solves a problem on Monday, her agent remembers the solution — and on Tuesday another colleague on a neighboring project solves the exact same problem all over again, because his agent knows nothing about that insight.

This effect can be softened by instructing agents to store knowledge and context as comprehensively as possible in project-specific files such as AGENTS.md, rather than keeping it exclusively in the agent's private memory. That's a good first step. But what about a second project running the same tech stack? Those insights simply aren't available there, because they remain locked inside the first project's repository. What's needed is a workflow that extracts this information from project files or from individual people's personal files and makes it centrally available — across individual repositories and individual people.

## Two building blocks that turn individual agents into a team

For many isolated agents to actually become shared knowledge, two distinct, complementary building blocks are needed at their core: **shared skills** and **shared context**.

**Shared skills** are reusable, versioned capability packages: a bundled approach, a tool, a check routine, packaged so it doesn't need to be reinvented but can simply be installed. Instead of everyone accumulating their own collection of prompts, small scripts, and tricks, such capabilities can now be provisioned organization-wide: administrators assemble a curated marketplace from which teams or individual groups get exactly the skills, agents, and tools that fit their work — from the marketing department to the engineering team. Anyone who builds a useful capability themselves can also share it directly with colleagues, not only receive it top-down. The key point is: a skill is no longer one person's private know-how, but an artifact that gets maintained, versioned, and reused across the whole organization.

**Shared context**, on the other hand, isn't about capability but about knowledge: stored facts, decisions, preferences, and experiences that multiple agents can access — regardless of person, tool, or project. Technically, dedicated memory services are increasingly emerging for this, connected via the Model Context Protocol: one agent can store an insight, and another agent — started by the same person or by someone else, running the same or a different language model — can find it later. That turns many individually stateless agents into something like institutional memory: architectural decisions, conventions, "we already tried that, it didn't work" — available across sessions, projects, and tool boundaries, not just inside one single chat history.

Both building blocks solve different halves of the same problem. Shared skills prevent everyone from reinventing the same capability. Shared context prevents the same insight from having to be rediscovered over and over. Only together do they produce what was missing at the start: an organization that learns from its agents' experience — not just individual people who happen to use the same agent.

## How organizations set this up in practice

Regardless of which tool a team uses, the path from "everyone keeps their own private collection of prompts and scripts" to "the organization provides vetted capabilities" now tends to follow a similar pattern.

The usual starting point is a marketplace-like admin interface maintained by the organization's administrators — typically the same backend where user accounts, groups, and permissions are already managed. There, a source for skills and plugins gets registered: often a Git repository, whether on GitHub, GitLab, or self-hosted, holding the actual capabilities as versioned packages — comparable to a small app store for agents. From that source, administrators choose which skills, agents, and connections to external tools are available to which groups: the engineering team gets different capabilities than the marketing team, and a department with particular data-protection needs might only get a restricted subset.

Alongside this top-down distribution there is usually a second, more informal path: individuals who have built something useful themselves can share it directly with colleagues without it needing to be rolled out organization-wide first. That creates a cycle: useful one-off solutions move from the personal level to the team level, and from there — once they prove themselves — into the official, organization-wide collection.

Similar mechanisms are now showing up across several providers of AI development tools, not just one product. The underlying principle stays the same: capabilities are no longer assembled from scratch in every editor or chat interface, but defined centrally, given permissions, versioned, and then rolled out into each team member's own tools.

This is pure infrastructure, not an end in itself. An organization that skips this step doesn't lose anything visibly right away — but it pays for it over time, in duplicated work, inconsistent results, and knowledge that leaves the organization with individual people when they change teams.

## A new approach: Buzz from Block

An exciting new approach is being pursued by **Buzz**, a tool from Block, Jack Dorsey's company. Buzz combines team communication similar to Slack, Git hosting similar to GitHub, and agents as so-called first-class citizens — with their own identities attached to a human team member. Instead of a shared bot token, each agent gets its own cryptographic key pair; a second signature verifiably ties it back to the person operating it. Every message, every code review, every workflow step is stored as a cryptographically signed event on the decentralized Nostr protocol — not as a row in a single vendor's proprietary database.

In practice this means agents in Buzz can independently post messages, review code, and trigger approved automations — visible to the whole team, with their own permissions and a traceable history, rather than as an anonymous bot in the background. The tool is deliberately model- and harness-agnostic: teams can run agents based on Claude Code, OpenAI Codex, or the open-source framework Goose, connected via the Agent Client Protocol. The code is published under an Apache 2.0 license at github.com/block/buzz; teams can self-host Buzz or use a managed version.

As of late July 2026, Buzz is still very early — version 0.4.21, several features are still missing, and whether the concept catches on broadly remains open. But the direction is notable: once agents have their own verifiable identity in the same communication space as humans, the line between "my private assistant" and "our team tool" disappears. An agent no longer just posts in my own chat window, but visibly in the team channel — with history, with accountability, and with the ability for others to see, comment on, and build on its work.

## It's not the benchmark that decides, but how collaboration is organized

One thing is clear: what matters is no longer whether one language model scores two points higher than another on some benchmark. What matters is how a team organizes working together with agents: where does what an agent learns end up? Who sees what an agent does? How does one person's experience turn into knowledge shared across an entire organization?

AGENTS.md, shared skills, shared context, and tools like Buzz are different answers to the same question. None of them is the solution on its own. But together they show where things are heading: away from the isolated personal assistant, toward the agent as an actual teammate — with its own identity, with shared memory, and embedded in the same tools and conversations as its human colleagues.
