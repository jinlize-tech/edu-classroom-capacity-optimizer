# 使用说明

## 适用任务

周六晚间满班，但工作日下午闲置，部分小班可合并释放教师。

## 准备输入

教室清单、开放时段、班级与人数、课程时长、教师可用性、周期、容量规则、需求预测。使用前先脱敏姓名、联系方式和与任务无关的敏感信息。

## 操作步骤

1. 建立时段容量
2. 计算需求与利用率
3. 找瓶颈和空档
4. 模拟调班/合并/加开
5. 检查硬约束
6. 输出行动建议

## 校验命令

```powershell
node scripts/validate_input.js examples/typical_input.json
node scripts/validate_output.js examples/typical_output.json
```

## 状态使用

- `completed`：核心成果完整。
- `completed_with_limits`：只完成可验证部分，并说明受阻范围。
- `needs_input`：缺少关键输入。
- `needs_confirmation`：资料冲突或需人工确认。
- `failed`：工具或计算失败，提供恢复动作。

## 人工确认

业务负责人复核输入事实、关键假设和最终成果适用范围后，成果才可进入正式业务使用。
