<div align="center">

# IBAS BusinessPartner

**业务伙伴模块**

IBAS 系统的业务伙伴管理模块，提供客户、供应商、潜在客户、联系人、地址、协议、资产、付款条件等业务伙伴主数据管理功能。

Business partner management module for the IBAS system — customer, supplier, lead, contact person, address, agreement, asset, and payment term management.

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Java](https://img.shields.io/badge/Java-1.8+-orange.svg)](https://www.oracle.com/java/)
[![Maven](https://img.shields.io/badge/Maven-3.x-red.svg)](https://maven.apache.org/)
[![Version](https://img.shields.io/badge/version-0.2.0-green.svg)](pom.xml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#-贡献--contributing)

</div>

---

## 📖 目录 | Table of Contents

- [✨ 特性 | Features](#-特性--features)
- [📦 模块结构 | Modules](#-模块结构--modules)
- [🚀 快速开始 | Quick Start](#-快速开始--quick-start)
- [📋 业务对象 | Business Objects](#-业务对象--business-objects)
- [📚 相关项目 | Related Projects](#-相关项目--related-projects)
- [🤝 贡献 | Contributing](#-贡献--contributing)
- [📄 许可证 | License](#-许可证--license)

---

## ✨ 特性 | Features

- **👤 客户管理** — 客户（Customer）主数据维护
- **🏭 供应商管理** — 供应商（Supplier）主数据维护
- **🎯 潜在客户** — 潜在客户（Lead）管理与转化
- **👥 业务伙伴组** — 业务伙伴分组（Business Partner Group）管理
- **📇 联系人** — 联系人（Contact Person）信息管理
- **📍 地址** — 业务伙伴地址（Address）管理
- **📄 协议** — 业务协议（Agreement）管理
- **💰 资产** — 业务伙伴资产（Business Partner Asset）与资产日志管理
- **🏦 内部对账** — 内部对账（Internal Reconciliation）管理
- **💳 付款条件** — 付款条件（Payment Term）配置
- **📦 资产项目** — 资产项目（Asset Item）维护

---

## 📦 模块结构 | Modules

| 模块 | 类型 | 说明 |
|------|------|------|
| `ibas.businesspartner` | JAR | **核心模块** — 业务对象定义、仓储层、业务逻辑 |
| `ibas.businesspartner.service` | WAR | **REST 服务** — Jersey 端点（DataService、FileService） |

---

## 🚀 快速开始 | Quick Start

### 环境要求 | Prerequisites

- **JDK** 1.8+
- **Maven** 3.x
- [ibas-framework](https://github.com/color-coding/ibas-framework)（BOBAS 框架）

### 构建 | Build

```bash
# 克隆仓库
git clone https://github.com/color-coding/ibas.businesspartner.git
cd ibas.businesspartner

# 编译全部模块
./compile_packages.sh            # Linux / macOS
compile_packages.bat             # Windows

# 编译单个模块
mvn clean package install -Dmaven.test.skip=true -f ibas.businesspartner/pom.xml

# 运行测试
mvn test -f ibas.businesspartner/pom.xml

# 部署
./deploy_packages.sh
```

### Maven 依赖

```xml
<dependency>
    <groupId>org.colorcoding.apps</groupId>
    <artifactId>ibas.businesspartner</artifactId>
    <version>0.2.0</version>
</dependency>
```

---

## 📋 业务对象 | Business Objects

| 业务对象 | 说明 |
|----------|------|
| `Customer` | 客户 |
| `Supplier` | 供应商 |
| `Lead` | 潜在客户 |
| `BusinessPartnerGroup` | 业务伙伴组 |
| `ContactPerson` | 联系人 |
| `Address` | 地址 |
| `Agreement` | 业务协议 |
| `BusinessPartnerAsset` / `BusinessPartnerAssetJournal` | 业务伙伴资产与资产日志 |
| `AssetItem` | 资产项目 |
| `InternalReconciliation` / `InternalReconciliationLine` | 内部对账与对账行 |
| `PaymentTerm` | 付款条件 |

---

## 📚 相关项目 | Related Projects

| 项目 | 说明 |
|------|------|
| [ibas-framework](https://github.com/color-coding/ibas-framework) | BOBAS 业务对象框架 |
| [ibas.sales](https://github.com/color-coding/ibas.sales) | 销售管理模块 |
| [ibas.purchase](https://github.com/color-coding/ibas.purchase) | 采购管理模块 |

---

## 🤝 贡献 | Contributing

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 发起 Pull Request

---

## 📄 许可证 | License

本项目基于 [Apache License 2.0](LICENSE) 开源。
---

## 🙏 鸣谢 | Thanks

<div align="center">

**[Color-Coding Studio](http://colorcoding.org/)** · 咔啦工作室

</div>
