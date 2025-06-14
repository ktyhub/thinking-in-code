---
title: BPMN 在线绘制工具
description: 一个用于绘制和编辑 BPMN（业务流程模型和符号）的在线工具
---

# BPMN 在线绘制工具

<div class="bpmn-container">
    <div class="bpmn-toolbar">
        <button id="new-diagram" class="bpmn-btn">新建图表</button>
        <button id="save-diagram" class="bpmn-btn">保存图表</button>
        <button id="load-diagram" class="bpmn-btn">加载图表</button>
        <input type="file" id="file-input" style="display: none;">
    </div>
    <div id="bpmn-canvas" style="width: 100%; height: 600px; border: 1px solid #ccc;"></div>
</div>

<script src="https://unpkg.com/bpmn-js@11.5.0/dist/bpmn-navigated-viewer.development.js"></script>
<script src="https://unpkg.com/bpmn-js@11.5.0/dist/bpmn-modeler.development.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // 初始化 BPMN Modeler
    const modeler = new BpmnJS({
        container: '#bpmn-canvas'
    });

    // 创建新图表
    document.getElementById('new-diagram').addEventListener('click', function() {
        createNewDiagram();
    });

    // 保存图表
    document.getElementById('save-diagram').addEventListener('click', function() {
        modeler.saveXML({ format: true }, function(err, xml) {
            if (err) {
                console.error('保存失败', err);
                return;
            }
            const encodedData = encodeURIComponent(xml);
            const link = document.createElement('a');
            link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData;
            link.download = 'diagram.bpmn';
            link.click();
        });
    });

    // 加载图表
    document.getElementById('load-diagram').addEventListener('click', function() {
        document.getElementById('file-input').click();
    });

    document.getElementById('file-input').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const xml = e.target.result;
            modeler.importXML(xml, function(err) {
                if (err) {
                    console.error('导入失败', err);
                    return;
                }
                modeler.get('canvas').zoom('fit-viewport');
            });
        };
        reader.readAsText(file);
    });

    // 创建新的图表
    function createNewDiagram() {
        const diagramXML = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" 
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" 
                  id="Definitions_1" 
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1"/>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="173" y="102" width="36" height="36"/>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

        modeler.importXML(diagramXML, function(err) {
            if (err) {
                console.error('创建新图表失败', err);
                return;
            }
            modeler.get('canvas').zoom('fit-viewport');
        });
    }

    // 初始化时创建新图表
    createNewDiagram();
});
</script>

<style>
.bpmn-container {
    margin: 20px 0;
}

.bpmn-toolbar {
    margin-bottom: 10px;
}

.bpmn-btn {
    background-color: var(--md-primary-fg-color);
    color: white;
    border: none;
    padding: 8px 16px;
    margin-right: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
}

.bpmn-btn:hover {
    background-color: var(--md-primary-fg-color--dark);
}
</style>

## BPMN 简介

BPMN（Business Process Model and Notation，业务流程模型和符号）是一种图形化表示法，用于以业务流程模型详细说明各种业务流程。它提供了一种标准的、易于理解的符号语言，使业务和技术人员能够清晰地沟通业务流程。

### 主要元素

- **事件（Events）**：表示流程中发生的事情，如开始、结束、中间事件等
- **活动（Activities）**：表示流程中需要执行的工作
- **网关（Gateways）**：表示流程中的决策点，用于控制流程的分支和合并
- **连接对象（Connecting Objects）**：用于连接流程元素，定义流程顺序

## 使用说明

1. 点击**新建图表**按钮创建一个空白的 BPMN 图表
2. 使用左侧工具栏添加各种 BPMN 元素
3. 完成绘制后，点击**保存图表**按钮将图表下载为 BPMN 文件
4. 要编辑已有图表，点击**加载图表**按钮并选择本地 BPMN 文件

## 应用场景

- 业务流程分析与设计
- 工作流引擎配置
- 流程自动化实现
- 业务需求文档编写
