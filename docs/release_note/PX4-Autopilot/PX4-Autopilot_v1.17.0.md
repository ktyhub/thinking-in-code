---
title: "PX4-Autopilot v1.17.0"
project: "PX4-Autopilot"
repo: "PX4/PX4-Autopilot"
tag: "v1.17.0"
published: "2026-05-13"
type: "minor"
lang: "en"
summary: "PX4 v1.17 builds on PX4 v1.16, with the changes below landing since v1.16.2. This release adds Altitude Cruise mode, improves Fixed Wing Takeoff behaviour on navigation loss, and exposes cleaner high-level fixed-wing…"
---

# PX4-Autopilot v1.17.0

## What's Changed
PX4 v1.17 builds on [PX4 v1.16](https://docs.px4.io/main/en/releases/1.16), with the changes below landing since v1.16.2. This release adds [Altitude Cruise](https://docs.px4.io/main/en/flight_modes_mc/altitude_cruise) mode, improves Fixed Wing Takeoff behaviour on navigation loss, and exposes cleaner high-level fixed-wing and rover control interfaces for ROS 2 workflows. The in-tree Zenoh middleware matures to rmw_zenoh compatibility, simulation gains Gazebo Jetty support and Ackermann SIH, and three new INS drivers (MicroStrain, sbgECom, EULER-NAV) join the ecosystem alongside Septentrio GNSS resilience reporting and barometer auto-calibration against GNSS height. PX4 v1.17 also includes user-visible MAVLink, RC, logging, failsafe, and rover refinements across the stack.

## Major Changes
* New multicopter flight mode: [Altitude Cruise](https://docs.px4.io/main/en/flight_modes_mc/altitude_cruise). Holds tilt and heading on stick release so the vehicle keeps cruising at a steady velocity instead of stopping like Altitude mode does.
* [Fixed Wing Takeoff mode](https://docs.px4.io/main/en/flight_modes_fw/takeoff) now keeps climbing with level wings on navigation loss and can use the takeoff waypoint latitude and longitude to define the loiter position. ([PX4-Autopilot#25226](https://github.com/PX4/PX4-Autopilot/pull/25226))
* Fixed-wing vehicles (and VTOLs in fixed-wing mode) can now be controlled from ROS 2 via the new [FwLateralLongitudinalSetpointType](https://docs.px4.io/main/en/ros2/px4_ros2_control_interface#fw-lateral-longitudinal-setpoint) in the PX4 ROS 2 Control Interface, exposing direct lateral and longitudinal setpoints.
* Rovers can now be controlled from ROS 2 via the new [RoverSetpointTypes](https://docs.px4.io/main/en/ros2/px4_ros2_control_interface#rover-setpoints) in the PX4 ROS 2 Control Interface, with valid combinations of position, speed, throttle, attitude, rate, and steering setpoints exposed as guaranteed-valid setpoint types. See [Rovers Apps & API](https://docs.px4.io/main/en/flight_modes_rover/api).
* The in-tree [Zenoh middleware](https://docs.px4.io/main/en/middleware/zenoh) matures to rmw_zenoh compatibility (CDRv1 serialization, ROS 2 graph liveliness, auto-generated config from dds_topics.yaml, Domain ID parameter, Zenoh CLI). Zenoh is built into the default firmware on FMU-v6xRT (make px4_fmu-v6xrt_default); on FMU-v6x and SITL it ships as a zenoh build variant (make px4_fmu-v6x_zenoh, make px4_sitl_zenoh).
* Initial [MC Neural Network Control](https://docs.px4.io/main/en/neural_networks/mc_neural_network_control) test path: PX4 v1.17 integrates [TensorFlow Lite Micro](https://docs.px4.io/main/en/neural_networks/tflm) on-device so an externally trained network (for example trained with reinforcement learning in [Aerial Gym](https://ntnu-arl.github.io/aerial_gym_simulator/)) can be loaded as a tflite model and substituted for the multicopter controller for research and bench testing. It is not a replacement for the production controller stack.([PX4-Autopilot#24366](https://github.com/PX4/PX4-Autopilot/pull/24366))

## Release Notes
* [Click here to view the full Release Notes](https://docs.px4.io/main/en/releases/1.17)
* Full Changelog [v1.16.2...v1.17.0](https://github.com/PX4/PX4-Autopilot/compare/v1.16.2...v1.17.0)

## New Contributors
* @ischollETH - first contribution: #25215
* @vololand - first contribution: #25362
* @czx-fly - first contribution: #25364
* @Sayshara - first contribution: #24991
* @accton-iot - first contribution: #25102
* @ljarvela - first contribution: #25454
* @fbaklanov - first contribution: #24534
* @renjieDLUT - first contribution: #25527
* @rmahoney-skai - first contribution: #25539
* @HTRamsey - first contribution: #25486
* @jyhminwang - first contribution: #25411
* @tolesam - first contribution: #24137
* @SolderSyntax - first contribution: #25441
* @alexespinoza28 - first contribution: #25525
* @Hs293Go - first contribution: #25444
* @tobias-auterion - first contribution: #25602
* @Luka-Filipovic - first contribution: #25618
* @Louis-max-H - first contribution: #25012
* @msberk - first contribution: #25587
* @Parkhb1106 - first contribution: #25619
* @radiolinkW - first contribution: #25562
* @Siri2K - first contribution: #25637
* @airpixel-cz - first contribution: #25651
* @JacopoPan - first contribution: #24040
* @annoybot - first contribution: #25649
* @asherikov - first contribution: #25742
* @ttechnick - first contribution: #25897
* @MDEAGEWT - first contribution: #25776
* @AkaiEurus - first contribution: #26199

---

> **Source** [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) · `v1.17.0` · 2026-05-13 · [upstream release](https://github.com/PX4/PX4-Autopilot/releases/tag/v1.17.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
