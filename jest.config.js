module.exports = {
  // 测试之前设置模块路径或处理全局变量
  // setupFiles: ['./jest.setup.js'],
  // 跳过测试的目录
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  // 跳过模块匹配
  modulePathIgnorePatterns: ['/node_modules/', 'dist'],
  // 测试环境
  testEnvironment: 'jsdom',
  // 模块解析
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'vue'],
  // 搜索文件根路径
  roots: ['<rootDir>'],
};
