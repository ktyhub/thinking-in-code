# go-ethereum Commando Package (v1.15.4)
### 为什么要使用go-ethereum

在这个数字化飞速发展的时代，区块链技术如同一场革命，改变着我们对信任和交易的理解。然而，面对众多的区块链平台，开发者们常常陷入选择的困境。go-ethereum（Geth）作为以太坊的官方实现，凭借其强大的功能和灵活性，成为了开发者的首选。它不仅支持智能合约的创建和执行，还提供了丰富的工具和库，帮助开发者轻松构建去中心化应用（DApps）。然而，使用go-ethereum并非没有挑战，如何在复杂的技术环境中找到最优解，成为了每个开发者必须面对的矛盾。

### go-ethereum是什么

go-ethereum是以太坊的官方客户端，使用Go语言编写。它允许用户与以太坊区块链进行交互，支持节点的运行、交易的发送、智能合约的部署等功能。作为一个开源项目，go-ethereum不仅为开发者提供了强大的工具，还拥有活跃的社区支持，确保其持续更新和优化。

### 入门示例

想象一下，你是一名初创公司的开发者，计划构建一个去中心化的投票系统。使用go-ethereum，你可以轻松创建一个智能合约，允许用户在区块链上进行投票。首先，你需要安装Geth并同步以太坊网络。接着，编写一个简单的智能合约，定义投票的规则和流程。最后，通过Geth的命令行工具将合约部署到以太坊网络，用户便可以通过你的DApp参与投票。这一过程不仅展示了go-ethereum的易用性，也让你体验到了区块链技术的魅力。

### go-ethereum Commando Package (v1.15.4)版本更新了什么

在v1.15.4版本中，go-ethereum进行了多项重要的修复和改进。修复了eth_feeHistory中的回归问题，确保返回的blobGasRatio值正确。RPC事务提交的逻辑也得到了修复，避免了低费用交易的错误返回。此外，Txpool逻辑经过重构，减少了EIP-7702权限相关的错误日志。某些无效的blob交易不再导致p2p层的断开问题，同时，ethclient新增了BlobBaseFee方法，方便请求当前的blob基础费用。

### 更新日志

这是一个错误修复版本。
- 修复了v1.15.0版本中eth_feeHistory的回归问题，确保blobGasRatio返回值的正确性。
- 修复了RPC事务提交中的回归问题，避免低费用交易返回错误。
- 重新构建了Txpool逻辑，减少了关于EIP-7702权限的错误日志。
- 某些无效的blob交易不再导致p2p层的断开问题。
- ethclient现在提供了BlobBaseFee方法，以请求当前的blob基础费用。

对于完整的更改记录，请参阅Geth 1.15.4的发布里程碑。

### 总结

在v1.15.4版本中，go-ethereum通过一系列的错误修复和功能增强，提升了用户体验和系统稳定性。这些更新不仅解决了之前版本中的问题，还为开发者提供了更强大的工具，进一步推动了以太坊生态系统的发展。