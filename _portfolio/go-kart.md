---
title: "Custom Go-Kart Build"
excerpt: "Live-axle kart: square-tube weldment chassis, 212cc ES power, TAV-30, practical in-house fabrication, and custom push-to-start."
collection: portfolio
thumbnail: /images/go-kart-thumb.jpg   # add an image later; placeholder is okay for now
tags: [mechanical, DFM, CAD]
---

## Overview
Single-seat, **live-axle** kart engineered for dependable weekend use and easy service. Power comes from a **212 cc electric-start** four-stroke through a **30-series torque converter** to a **1″ live axle**. A **square-tube weldment** chassis gives stiffness and repeatable geometry for steering and braking, and the layout is built around adult ergonomics, chain/brake clearances, and service access.

The build is deliberately **in-house** to control cost and learning—designed in CAD and executed with simple shop tooling—plus a **custom push-to-start** integrated with the engine’s ES circuit and a coil **kill-switch** for safety.

## Key Specs
- **Engine:** 212 cc 4-stroke (electric start) with recoil backup  
- **Drive:** **TAV-30** torque converter → #420 chain  
- **Rear:** **1" live axle**, rotor + mechanical caliper, hubs/lock collars/flangettes  
- **Chassis:** 1"×1"×.120" **A513 square tubing**; SolidWorks **weldments** with parametric cut-list  
- **Steering:** Column with bearings, tie-rods/spindles; dedicated front cross-bar mount  
- **Wheels/Tires:** 6" fronts, 8" rears (corrected after vendor mix-up) :contentReference[oaicite:1]{index=1}

## Design Decisions (high-level)
- **Live-axle, square-tube frame** for simple fixturing, easy tabs/panels, and low cost vs. bent round tube.  
- **Electric-start engine** to avoid a DIY conversion (starter, ring gear, shroud mods) and keep the system reliable.  
- **Axle-hanger height** adjusted to keep stance level and maintain chain line/ground clearance. :contentReference[oaicite:2]{index=2}
- **Steering cross-bar** added so column placement matches spindle geometry and adult ergonomics. :contentReference[oaicite:3]{index=3}

## CAD & DFM
- Weldment members with IDs and **cut-list**; stock length planning accounts for **kerf**; batch identical cuts, deburr, label. :contentReference[oaicite:4]{index=4}  
- Packaging verification for **TAV, axle, brake, chain, seat, pedals, and steering**; service access checked. :contentReference[oaicite:5]{index=5}

## Manufacturing Plan (budget-first, in-house)
- **Cutting:** 14" abrasive **chop saw** for straight and miter cuts; **angle grinder** for deburr/clean-up.  
- **Fit-up:** Dry-fit with clamps/magnets; check diagonals; adjust before tacks. :contentReference[oaicite:6]{index=6}  
- **Welding:** Balanced **tack sequence**, re-measure each step; weld main frame → cross-bars → mounts/tabs. :contentReference[oaicite:7]{index=7}  
- **Reasoning:** Local fab quotes were disproportionate to scope; in-house approach maximizes learning and keeps budget on track.

## Electrical: Custom Push-to-Start + Safety
- Implemented a **push-to-start** using the engine’s ES path with a **fused** low-current button driving a **relay** to the starter; retained key/recoil as backup.  
- **Kill-switch** wired to ignition coil for fast shut-down; plan a **main fuse** near battery positive. :contentReference[oaicite:8]{index=8}

## BOM (selected)
Engine (212 cc ES), TAV-30 kit + plate, 1" live-axle kit (bearings/hubs/rotor/caliper), spindles/tie-rods, steering column/wheel, HD pedal & cable kits, #420 chain, wheels/tires, **A513 1"×1"×.120" tubing** (≈60 ft stock for margin/kerf). :contentReference[oaicite:9]{index=9}

## Build Log (condensed)
- Direction set to **non-shifter, 4-stroke** for scope/safety; timeline + milestones created. :contentReference[oaicite:10]{index=10}  
- Chassis weldment CAD; **hanger height** decision; steering cross-bar; packaging checks. :contentReference[oaicite:11]{index=11}  
- Cut-list finalized; materials ordered; **vendor tire correction**; ES engine received/validated; wiring plan drafted. :contentReference[oaicite:12]{index=12}

## Next Steps
- Mark lengths/angles from drawings → **cut / deburr / label** → dry-fit → tack sequence → weld frame → mounts/tabs → axle/steering → TAV & chain → cables → test. 
