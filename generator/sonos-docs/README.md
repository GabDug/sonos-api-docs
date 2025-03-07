# Sonos client generator `@svrooij/sonos-docs`
<!-- markdownlint-disable -->

CLI tool to generate documentation for the undocumented sonos api

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@svrooij/sonos-docs.svg)](https://www.npmjs.com/package/@svrooij/sonos-docs)
[![Downloads/week](https://img.shields.io/npm/dw/@svrooij/sonos-docs.svg)](https://www.npmjs.com/package/@svrooij/sonos-docs)
[![License](https://img.shields.io/npm/l/@svrooij/sonos-docs.svg)](https://github.com/svrooij/sonos-api-docs/blob/master/generator/sonos-docs/package.json)

<!-- toc -->
* [Sonos client generator `@svrooij/sonos-docs`](#sonos-client-generator-svrooijsonos-docs)
* [🏗 Usage](#-usage)
* [🔨 Commands](#-commands)
<!-- tocstop -->

# 🏗 Usage

<!-- usage -->
```sh-session
$ npm install -g @svrooij/sonos-docs
$ sonos-docs COMMAND
running command...
$ sonos-docs (-v|--version|version)
@svrooij/sonos-docs/1.0.0 win32-x64 node-v16.8.0
$ sonos-docs --help [COMMAND]
USAGE
  $ sonos-docs COMMAND
...
```
<!-- usagestop -->

# 🔨 Commands

<!-- commands -->
* [`sonos-docs combine`](#sonos-docs-combine)
* [`sonos-docs generate TEMPLATE OUTPUT`](#sonos-docs-generate-template-output)
* [`sonos-docs help [COMMAND]`](#sonos-docs-help-command)
* [`sonos-docs musicservices IP`](#sonos-docs-musicservices-ip)
* [`sonos-docs services IP`](#sonos-docs-services-ip)

## `sonos-docs combine`

Generate combined.json file by combining the documentation file and the discovered services.

```
USAGE
  $ sonos-docs combine

OPTIONS
  -h, --help                   show CLI help

  --discoveryUrl=discoveryUrl  [default: https://github.com/svrooij/sonos-api-docs/raw/main/generator/sonos-docs/data/]
                               Base url to load the discovery files from

  --docsFile=docsFile          File location of documenation, instead of url.

  --docsUrl=docsUrl            [default: https://svrooij.io/sonos-api-docs/documentation.json] The url of the
                               documentation, this is just to override the documentation url

  --folder=folder              Load discovered services from this folder. Loaded from repository if empty

  --models=models              [default: S1-1,S5-1,S9-1,S3-2,S6-2,S13-2,S14-2,S27-2,Sub-2] Models to use, separated by
                               comma. as {model}-{softwareGen}

  --out=out                    [default: .cache/combined.json] Output filename
```

_See code: [src/commands/combine.ts](https://github.com/svrooij/sonos-api-docs/blob/v1.0.0/src/commands/combine.ts)_

## `sonos-docs generate TEMPLATE OUTPUT`

Generate files based on the intermediate file and a template.

```
USAGE
  $ sonos-docs generate TEMPLATE OUTPUT

ARGUMENTS
  TEMPLATE  The template to use, either a folder relative to the current or a folder an included in the generator
  OUTPUT    The root directory where the files should be generated

OPTIONS
  -h, --help               show CLI help
  -i, --combined=combined  [default: .cache/combined.json] combined documentation file to use. generate with 'combine'
```

_See code: [src/commands/generate.ts](https://github.com/svrooij/sonos-api-docs/blob/v1.0.0/src/commands/generate.ts)_

## `sonos-docs help [COMMAND]`

display help for sonos-docs

```
USAGE
  $ sonos-docs help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `sonos-docs musicservices IP`

describe the command here

```
USAGE
  $ sonos-docs musicservices IP

ARGUMENTS
  IP  The IP of the sonos speaker to load the music services

OPTIONS
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --docs                  Show a markdown table
  --filter=filter         filter property by partial string matching, ex: name=foo
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --saveJson=saveJson     If set, save music services as json
  --show                  Show the music services
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [src/commands/musicservices.ts](https://github.com/svrooij/sonos-api-docs/blob/v1.0.0/src/commands/musicservices.ts)_

## `sonos-docs services IP`

Fetch device discovery document and generate json file

```
USAGE
  $ sonos-docs services IP

ARGUMENTS
  IP  The IP of the sonos to do service discovery for.

OPTIONS
  -d, --dryRun
  -f, --folder=folder  [default: data] Folder to write discovered services.
  -h, --help           show CLI help
```

_See code: [src/commands/services.ts](https://github.com/svrooij/sonos-api-docs/blob/v1.0.0/src/commands/services.ts)_
<!-- commandsstop -->
