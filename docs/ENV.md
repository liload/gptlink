# 配置概览

| 配置名                    | 示例值                              | 默认值              | 说明                                    |
|------------------------|----------------------------------|------------------|---------------------------------------|
| 数据库配置                  | &nbsp;                           | &nbsp;           | &nbsp;                                |
| DB_DRIVER              | mysql                            | mysql            | 数据库驱动，暂只支持mysql                       |
| DB_HOST                | 127.0.0.1                        | localhost        | 数据库连接地址                               |
| DB_PORT                | 3306                             | 3306             | 数据库连接的端口号                             |
| DB_DATABASE            | gptlink                          | &nbsp;           | 数据库名称                                 |
| DB_USERNAME            | root                             | &nbsp;           | 数据库用户名                                |
| DB_PASSWORD            | 123456                           | &nbsp;           | 数据库用户名密码                              |
| Redis配置                | &nbsp;                           | &nbsp;           | &nbsp;                                |
| REDIS_HOST             | localhost                        | localhost        | Redis连接地址                             |
| REDIS_AUTH             | (null)                           | (null)           | Redis连接的访问密码，如无则使用(null)              |
| REDIS_PORT             | 6379                             | 6379             | Redis连接的端口                            |
| 管理员配置                  | &nbsp;                           | &nbsp;           | &nbsp;                                |
| ADMIN_USERNAME         | admin                            | admin            | 管理端登录账号                               |
| ADMIN_PASSWORD         | admin666                         | admin888         | 管理端登陆密码                               |
| ADMIN_TTL              | 7200                             | 7200             | 每次登陆的有效期，单位秒                          |
| 系统配置                   | &nbsp;                           | &nbsp;           | &nbsp;                                |
| APP_NAME               | gptlink                          | gptlink          | 站点名称，可自行修改为系统标识名称，无限制内容               |
| APP_URL                | http://127.0.0.1                 | http://127.0.0.1 | 访问的项目地址，域名或IP或域名+端口号,填写错误可能导致支付无法成功回调 |
| JWT_SECRET             | wY3f28d8Wq4md2dNuXPHEdUccv2YWbKf |                  | 密钥，填入随机的32位字符即可                       |
| OPENAI配置 | &nbsp;                           | &nbsp;           | &nbsp;                                |
| OPENAI_HOST            | api.openai.com                   | api.openai.com   | 请求地址或代理地址，不填写则默认为 api.openai.com      |
| OPENAI_PORT            | 443                              | 443              | 访问端口，不填写则默认为 443                      |
| OPENAI_PROXY_HOST      | 172.0.0.1                        |                  | 代理地址，域名或ip都可，不填写则直连                   |
| OPENAI_PROXY_PORT      | 8888                             |                  | 代理端口，不填写则直连                           |
| OPENAI_MODEL      | gpt-3.5-turbo，gpt-3.5-turbo-16k，gpt-4，4.0 32k     |   gpt-3.5-turbo               | 使用的模型，可用配置值参考示例                       |
| OPENAI_MAX_TOKENS      | 4000                             |       4000           | 上下文合计最大使用的 tokens，不可超出官方限定，否则会异常      |
| OPENAI_MAX_RESPONSE_TOKENS      | 1000                             |     1000             | 每次请求返回的最大tokens，建议配置合理的值，否则返回内容可能不正常    |
