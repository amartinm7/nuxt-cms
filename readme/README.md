# .nvmrc setting up node version into netlify

You can create a .nvmrc file containing a node version number (or any other string that nvm understands; see nvm --help for details) in the project root directory (or any parent directory). Afterwards, nvm use, nvm install, nvm exec, nvm run, and nvm which will use the version specified in the .nvmrc file if no version is supplied on the command line.

For example, to make nvm default to the latest 5.9 release, the latest LTS version, or the latest node version for the current directory:
````bash
$ echo "5.9" > .nvmrc
````
````bash
$ echo "lts/*" > .nvmrc # to default to the latest LTS version
````
````bash
$ echo "node" > .nvmrc # to default to the latest version
````
NB these examples assume a POSIX-compliant shell version of echo. If you use a Windows cmd development environment, eg the .nvmrc file is used to configure a remote Linux deployment, then keep in mind the "s will be copied leading to an invalid file. Remove them.

Then when you run nvm:

````bash
$ nvm use
Found '/path/to/project/.nvmrc' with version <5.9>
Now using node v5.9.1 (npm v3.7.3)
````
nvm use et. al. will traverse directory structure upwards from the current directory looking for the .nvmrc file. In other words, running nvm use et. al. in any subdirectory of a directory with an .nvmrc will result in that .nvmrc being utilized.

The contents of a .nvmrc file must be the <version> (as described by nvm --help) followed by a newline. No trailing spaces are allowed, and the trailing newline is required.
