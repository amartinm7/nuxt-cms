![X-Spring-Cli](./_media/node-js.png)

# X-CMS-Cli

Download and install the cli tool.
For doing that locally 

```$bash
npm install
npm link
```
after that you can create the controller and services from the command line
```$bash
say-me create GetLastest
say-me create GetLastest
```
```$bash
 node index.js create GetLastest
```
```$bash
 npm run cli create GetLastest
```


## developing command line tools
- use the chalk lib to colorize the logs
- use the commander lib to create the command options
- use the npm link to create a symbolic link stored in the /usr/local/bin/say-hello.
Everytime you run 'say-hello' you executing the cli.


![X-Spring-Cli](./_media/middy.png)
