# 教室产能与满班率优化示例

## 典型场景

周六晚间满班，但工作日下午闲置，部分小班可合并释放教师。

## 具体示例

系统不只看总体利用率，而是识别黄金时段瓶颈和非黄金时段低效，给出分时策略。

## 脱敏输入示例

```json
{
  "contract_version": "1.2.0",
  "data_status": "confirmed",
  "contains_sensitive_data": false,
  "requested_output_language": "zh-CN",
  "rooms": [
    {}
  ],
  "open_hours": [
    {}
  ],
  "classes": [
    {}
  ],
  "period": "分析周期已核对（脱敏示例）",
  "demand_assumptions": [
    {}
  ],
  "capacity_rules": "容量与使用规则已核对（脱敏示例）"
}
```

## 预期处理

1. 运行输入契约校验。
2. 逐项核对输入来源、版本和口径。
3. 按`references/PROFESSIONAL_PLAYBOOK.md`完成专业分析。
4. 输出产能热区表、满班率、瓶颈等核心成果。
5. 由业务负责人确认输入事实、关键假设和最终成果适用范围后才可作为正式业务结论。

## 不应出现的输出

- 虚构政策、价格、人员、课程或客户事实。
- 以“暂无”“待完善”等占位文本冒充完成。
- 无依据的确定性判断或伪造人工签批。
