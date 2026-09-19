# HNUTA Body Bootstrap

## HNUTA_BODY_BOOTSTRAP — mandatory cross-repository entry

This repository is the **agent-chat-surface** organ of the Hood Ninja body. Its code remains authoritative for this organ, while `notitlenikno-creator/hoodninja` is the HNUTA control plane for body topology, cross-repo governance, evidence, convergence, and merge policy.

Before planning, editing, reviewing, or selecting work in this repo:

1. Resolve the HNUTA control-plane checkout from `HNUTA_CONTROL_PLANE_ROOT` or an already-present trusted checkout. Do **not** silently clone/execute remote code as part of bootstrap.
2. In the control-plane checkout, verify the remote is `notitlenikno-creator/hoodninja`, then successfully fetch `origin/main` and record its exact SHA.
3. Run `node scripts/hnuta.mjs bootstrap --entry agent` and `node scripts/hnuta.mjs dev-platform status` from that exact control-plane checkout.
4. Read the control-plane `AGENTS.md`, `.hnuta/repositories.json`, graph/convergence/EvidenceAgent state, and current receipts relevant to this organ.
5. Record both `CONTROL_PLANE_HEAD` and this repo's `ORGAN_HEAD` before mutation. If the control-plane bootstrap is unavailable or stale, classify the lane `OPERATOR_REQUIRED`; stale chat/history is never a substitute.
6. For cross-body work, update every affected CORE/ORGAN repository or attach evidence-backed `NO_CHANGE_REQUIRED` for the unaffected organs.

Merge rules remain: `canonical main -> branch -> bounded change -> tests/security/evidence -> PR -> exact-head review -> Codex merge operator -> convergence verification`. No routine direct-to-main code mutation, no stale-base merge, and no stub/mock/placeholder completion.

Machine-readable pointer: `.hnuta/control-plane.json`.
