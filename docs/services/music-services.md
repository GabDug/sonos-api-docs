---
layout: default
title: MusicServices
parent: Sonos Services
---
# MusicServices service
{: .no_toc }

Access to external music services, like Spotify or Youtube Music

The MusicServices service is available on these models: `Sonos One (S13) S2` / `Sonos Beam (S14) S2` / `Sonos Roam (S27) S2` / `Sonos Play:3 (S3) S2` / `Sonos Play:5 (S6) S2` / `Sonos Sub (Sub) S2` / `Sonos Play:1 (S1) S1` / `Sonos Play:5 (S5) S1` / `Sonos Playbar (S9) S1`.

1. TOC
{:toc}

---

## Service data
{: .no_toc }

| name | value |
|:-----|:------|
| **Control URL** | `http://192.168.x.x:1400/MusicServices/Control` |
| **Event subscription URL** | `http://192.168.x.x:1400/MusicServices/Event` |
| **Discovery url** | `http://192.168.x.x:1400/xml/MusicServices1.xml` |
| **Service ID** | `urn:upnp-org:serviceId:MusicServices` |
| **Service type** | `urn:schemas-upnp-org:service:MusicServices:1` |

### Sample request
{: .no_toc }

```text
POST /MusicServices/Control
Host: 192.168.x.x:1400
soapaction: "urn:schemas-upnp-org:service:MusicServices:1#{ActionName}"
Content-Type: text/xml; charset="utf-8"

<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
  <s:Body>
    {ActionBodyHere}
  </s:Body>
</s:Envelope>
```

---

## Available actions

### GetSessionId

Action body:

```xml
<u:GetSessionId xmlns:u="urn:schemas-upnp-org:service:MusicServices:1">
  <ServiceId>ui4</ServiceId>
  <Username>string</Username>
</u:GetSessionId>
```

Inputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **ServiceId** | `ui4` |  |
| **Username** | `string` |  |

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **SessionId** | `string` |  |

### ListAvailableServices

Load music service list as xml

Action body:

```xml
<u:ListAvailableServices xmlns:u="urn:schemas-upnp-org:service:MusicServices:1">
</u:ListAvailableServices>
```

No input arguments

Outputs:

| parameter | type | description |
|:----------|:-----|:------------|
| **AvailableServiceDescriptorList** | `string` |  |
| **AvailableServiceTypeList** | `string` |  |
| **AvailableServiceListVersion** | `string` |  |

**Remarks** Some libraries also support ListAndParseAvailableServices

### UpdateAvailableServices

Action body:

```xml
<u:UpdateAvailableServices xmlns:u="urn:schemas-upnp-org:service:MusicServices:1">
</u:UpdateAvailableServices>
```

No input arguments

## Events

The MusicServicesService has variables that might be emitted if you subscribe to events.

### Subscribe to events

```text
SUBSCRIBE /MusicServices/Event
Host: 192.168.x.x:1400
callback: <http://...>
NT: upnp:event
Timeout: Second-3600
```

### Event variables

| Variable | Sends events* | type | possible values |
|:---------|:-------------|:-----|:----------------|
| ServiceId |  | `ui4` |  |
| ServiceListVersion | ✔ | `string` |  |
| SessionId |  | `string` |  |
| Username |  | `string` |  |

If the variable has a `✔` in the Sends events column, the service discovery specifies this variable emits events. Other properties might be send as a part of `LastChange`

---

This file is automatically generated with [@svrooij/sonos-docs](https://github.com/svrooij/sonos-api-docs/tree/main/generator/sonos-docs), do not edit manually.

| Device | Software generation | Software version | Discovery date |
|:-------|:--------------------|:-----------------|:---------------|
| `Sonos One (S13)` | S2 | 63.2-90210 | 2021-07-21T23:31:19.273Z |
| `Sonos Beam (S14)` | S2 | 64.3-19080 | 2021-08-18T06:04:08.308Z |
| `Sonos Roam (S27)` | S2 | 63.2-90210 | 2021-07-21T23:31:31.207Z |
| `Sonos Play:3 (S3)` | S2 | 64.3-19080 | 2021-08-18T06:09:36.692Z |
| `Sonos Play:5 (S6)` | S2 | 64.3-19080 | 2021-08-18T06:06:35.970Z |
| `Sonos Sub (Sub)` | S2 | 63.2-90210 | 2021-07-21T23:31:40.304Z |
| `Sonos Play:1 (S1)` | S1 | 57.6-88280 | 2021-07-21T14:51:41.469Z |
| `Sonos Play:5 (S5)` | S1 | 57.6-88280 | 2021-07-21T14:51:44.187Z |
| `Sonos Playbar (S9)` | S1 | 57.6-88280 | 2021-07-21T14:51:47.050Z |
