# learnHttp

## 基础
### 经典五层网络传输
![]('https://github.com/icecreamk/learnHttp/blob/main/img/http5.png')

* 物理层：主要作用是定义物理设备如何传输数据
* 数据链路层：在通信的实体间建立数据链路连接
* 网络层：为数据在节点之间传输创建逻辑链路
* 传输层：向用户提供可靠的端到端服务；向高层屏蔽了下层数据通信的细节
* 应用层：为应用软件提供服务；构建于TCP协议上；屏蔽了网络传输的相关细节

### 三次握手
![时序图]('https://github.com/icecreamk/learnHttp/blob/main/img/sanciwoshou.png')

* URI: Uniform Resourse Identifier 统一资源标志符，包含URL 和 URN
* URL：Uniform Resourse Locator 统一资源定位器
* URN：永久统一资源定位符，资源移动后仍可找到，目前无成熟方案

* 浏览器输入URL后http请求返回的完整过程
![http]('https://github.com/icecreamk/learnHttp/blob/main/img/http.png')