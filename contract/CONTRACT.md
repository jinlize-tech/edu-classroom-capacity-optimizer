# 输入输出契约

## 输入字段

| 键 | 名称 | 类型 | 必填 |
|---|---|---|---|
| `rooms` | 教室清单 | array | 是 |
| `open_hours` | 每周开放时段 | array | 是 |
| `classes` | 现有班级 | array | 是 |
| `period` | 分析周期 | string | 是 |
| `demand_assumptions` | 需求假设 | array | 否 |
| `capacity_rules` | 容量与使用规则 | string | 是 |

## 状态

- `completed`：核心成果完整，关键结论人工确认要求满足。
- `completed_with_limits`：至少一项实质成果，说明限制、已完成和受阻范围。
- `needs_input`：必填字段缺失。
- `needs_confirmation`：资料冲突或人工确认未完成。
- `failed`：计算或工具失败。

## 输出

- `产能热区表`：结构化条目数组，不允许空壳或占位文本。
- `满班率`：结构化条目数组，不允许空壳或占位文本。
- `空档`：结构化条目数组，不允许空壳或占位文本。
- `瓶颈`：结构化条目数组，不允许空壳或占位文本。
- `情景比较`：结构化条目数组，不允许空壳或占位文本。
- `调整步骤`：结构化条目数组，不允许空壳或占位文本。
- `风险项`：结构化条目数组，不允许空壳或占位文本。

完整机器契约见`contract/input.schema.json`、`contract/output.schema.json`和`contract/runtime_contract.json`。
