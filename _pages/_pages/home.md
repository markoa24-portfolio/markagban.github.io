---
title: "Home"
permalink: /
layout: single
author_profile: true
---

<section id="about" class="hero-about" data-reveal>
  <div class="about-grid">
    <aside class="about-aside">
      <h1 class="about-name">Mark Agban</h1>
      <h2 class="about-role">Aerospace / Mechanical Engineer</h2>

      <nav class="about-nav">
        <a href="#about">ABOUT</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>
      </nav>
    </aside>

    <div class="about-body">
      <p>
        I build reliable, serviceable hardware and enjoy taking ideas from
        <strong>CAD → cuts → welds</strong>. My sweet spot is the intersection of
        thoughtful mechanical design and hands-on manufacturing—DFM, clean packaging,
        and clear build docs.
      </p>

      <p>
        <strong>Currently</strong> I’m designing and fabricating a custom
        <strong>live-axle go-kart</strong>: square-tube weldment chassis, a
        <strong>212&nbsp;cc electric-start</strong> four-stroke through a
        <strong>30-series TAV</strong> to a <strong>1″ axle</strong>. The layout is
        CAD-driven for ergonomics and chain/brake/steering clearances, and I added a
        <strong>custom push-to-start</strong> (integrated to the ES circuit) with a
        coil <strong>kill-switch</strong>. The build is intentionally in-house to control
        cost and accelerate learning.
      </p>

      <p>
        In the past I’ve contributed across engineering environments:
        <strong>Haas Automation</strong> (shop/fixtures and an HID card-controlled
        machine-access system), <strong>Lamsco West</strong> (manufacturing engineering for
        aerospace parts), and university programs including <strong>GHPR</strong> and
        <strong> SHINE</strong>. I’ve also built scalable accessibility workflows at
        <strong>UCLA DCP</strong>.
      </p>

      <p class="about-skills">
        <em>Focus:</em> Mechanical Design &amp; CAD (SolidWorks weldments/assemblies, drawings),
        Analysis &amp; Trade Studies (hand calcs, basic FEA, MATLAB), DFM &amp; Manufacturing
        Planning (kerf-aware cut lists, fixture strategy, weld sequencing), Systems Integration
        (drivetrain chainline, steering/brake geometry, ES push-to-start &amp; fusing),
        Documentation (build instructions, checklists, accessibility standards).
      </p>

      <div class="about-cta">
        <a class="btn btn--primary" href="#projects">View Projects</a>
        <a class="btn" href="{{ site.baseurl }}/cv/">View CV</a>
      </div>
    </div>
  </div>
</section>

---

## Projects
<div id="projects" data-reveal>
{% include portfolio-grid.html %}
</div>

---

## Experience
<div id="experience" data-reveal>
{% include experience-cards.html %}
</div>

---

## Contact
<div data-reveal>
If you want to talk shop or see the build in person:<br>
<strong>Email:</strong> markagban@gmail.com · <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/markagban">linkedin.com/in/markagban</a>
</div>
