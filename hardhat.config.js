/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      // 指定任何要启动的节点配置
      // 更改数据库目录来持久化数据
      // 设置数据库目录来保存数据（例如，对于Ubuntu设置db的目录）：
      db: "./data",
    },
  },
};
