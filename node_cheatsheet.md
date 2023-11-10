## Changing node version using fnm 
```
# fnm install XX.X.X
# fnm alias XX.X.X default #Setting default version
# fnm use XX.X.X
# eval "$(fnm env --multi)"
```
## Changing node version using nvm
```
# nvm install XX.X.X
# nvm use XX.X.X
# nvm alias default XX.X.X
```
## Similar software:
```
Volta
n
```

## Types of dependencies
### Dependencies
```
Packages that are **REQUIRED** to run the proyect, used in production
```
### devDependencies
```
Packages that are **NOT REQUIRED** to run the proyect, that stay in develop phase
```
### peerDependencies
```
Different versions of the same package installed in the same proyect
```
## Install node packages with npm

### Local install 
Installed only in this npm_modules proyect folder
```
# npm install packageName
```
### Development install
Installed only in this npm_modules proyect folder but are not required in production
```
# npm install -D packageName
```
### Global install
Installed in our computer, and used in all node projects
```
# npm install -g packageName
```
