---
title: "Custom Go-Kart Build"
excerpt: "From CAD to chips: square-tube weldment chassis, packaging/clearance checks, optimized cut plan, push-to-start integration, and a practical fab workflow."
collection: portfolio
---

## Overview
Single-seat, four-stroke kart built as a hands-on exercise in **DFM**, packaging, and shop process. Focus areas: weldment CAD, jigging/tack sequence, drivetrain layout, and a simple, reliable **electric start** system. :contentReference[oaicite:1]{index=1}

## Key Specs
- **Engine:** Lifan 212 cc **Electric Start** (Honda GX200 clone); recoil backup  
- **Drive:** **30-series torque converter** to #420 chain  
- **Axle:** 1" live axle; rotor + mechanical caliper; lock collars/flangettes  
- **Chassis:** 1"×1"×.120" A513 square tubing; SolidWorks **weldments**  
- **Steering:** Shaft with bearings, crossbar mount aligned to spindles  
- **Brakes:** 6" disc + mechanical caliper; HD cable & pedal kit  
- **Tires/Wheels:** Front 145/70-6; rear 18×9.50-8 (corrected after vendor mix-up) :contentReference[oaicite:2]{index=2}

## Design Decisions & Rationale
- **Engine choice:** Began with Predator 212 for cost/support, switched to **Lifan 212 ES** to avoid a DIY electric-start conversion (flywheel, ring gear, starter, battery, shroud mods). Drop-in compatibility with TAV, same shaft/bore, keeps the system simple and reliable. :contentReference[oaicite:3]{index=3}  
- **Fabrication strategy:** Moved from round to **square tubing** to skip bending, simplify fixturing, and improve DFM for mounts/panels. Full **in-house fabrication** for cost control and iteration speed. :contentReference[oaicite:4]{index=4}  
- **Axle hanger height:** Relocated mounting to keep the chassis **level** and maintain ground clearance/chain line. :contentReference[oaicite:5]{index=5}  
- **Steering crossbar:** Added a dedicated front crossbar so the shaft sits where geometry and ergonomics demand it. :contentReference[oaicite:6]{index=6}

## CAD & DFM Highlights
- Weldment model with member IDs and **parametric cut-list** (~47 ft required, 60 ft on hand for margin/kerf/angles).  
- **Packaging checks** for torque converter, axle, brake, chain, seat, and pedals.  
- **Drawings** include length/angle callouts for direct marking on tube; **batch cutting** plan and label scheme. :contentReference[oaicite:7]{index=7}

## Manufacturing Plan
1. **Fabrication prep:** mark tube IDs/angles from drawings → cut (account 1/8" kerf) → deburr & label → **dry-fit** with clamps/magnets; check diagonals.  
2. **Welding:** balanced **tack sequence** → re-measure each step → weld main frame, then crossbars, then mounts/tabs.  
3. **Flat panels & tabs:** engine/seat/pedal plates; brake caliper tab; axle hangers; cable clamps.  
4. **Final fit:** mount axle, spindles, steering column; verify geometry; align sprockets & chain slack; route cables; function-check brakes/throttle. :contentReference[oaicite:8]{index=8}

## Electrical & Safety
- **Push-to-start** path added to factory key-start using proper **fuse sizing** and relay logic.  
- **Ignition kill-switch** for rapid shutdown; plan a main fuse near battery positive. :contentReference[oaicite:9]{index=9}

## BOM (selected highlights)
- Engine (Lifan 212 ES), TAV-30 kit, motor plate  
- 1" live axle kit (bearings, hubs, rotor/caliper, sprocket)  
- Spindles (L/R), tie-rod kit, steering wheel & shaft kit  
- HD pedal kit, throttle & brake cables, lock collars, #420 chain  
- Wheels/tires (front 6", rear 8")  
- Steel: **1"×1"×.120" A513** square tubing (≈60 ft stock) :contentReference[oaicite:10]{index=10}

> Full shopping links are in the build log; I’ll add photos and sourcing once assembly starts. :contentReference[oaicite:11]{index=11}

## Build Log (condensed)
- **Weeks 1–2:** Project direction (non-shifter, 4-stroke), initial BOM & timeline.  
- **Week 3:** Engine study → Lifan ES selected for integrated start.  
- **Week 4:** Chassis CAD begins; tubing/material choice established.  
- **Week 5:** Packaging: engine/TAV, axle, hanger mounts; steering tabs.  
- **Week 6:** Steering ergonomics; crossbar; future flat panels.  
- **Week 7:** Strategy shift to **square-tube** & in-house fab; preliminary stress checks.  
- **Week 8:** Weldment profiles fixed; **cut-list** generated; stock material planned.  
- **Week 9:** Engine received & validated (recoil + electric); push-to-start wiring proven; materials/BOM landed; vendor tire error corrected. :contentReference[oaicite:12]{index=12}

## Near-Term To-Dos
- **Prep/cut** tube, dry-fit, and **tack** (balanced sequence).  
- Weld frame → add mounts/tabs → assemble axle/steering → engine/TAV alignment → brake & cable routing → test. :contentReference[oaicite:13]{index=13}
