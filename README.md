# mytools

This project is just example parsing .log file in Windows using CLI on Node.js with commander npm packager

### Introduction
```shell
The file log error in Windows I get from folder C:/Windows/Panther/setuperr.log
```

## Command Usage
```shell
> mytools -h

Usage: index [options]

Options:
  -t, --t [type]              convert file to json or text (default: [])
  -o, --output [location]     location save file (default; [])
  -h, --help                  display help for command
  
```

### Example Converting log file to JSON file
```shell
> mytools -t json -o D:\Project

Process create file in parent at this folder...

[
  {
    "dateTime": "2022-05-06 06:56:04",
    "loggingLevel": "Error",
    "loggingCode": "[0x060126]",
    "loggingComponent": "IBS",
    "message": "CallBack_ImageWasSelectedInUi: An error occurred while removing the MultiEdition key from the blackboard.[gle=0x00000490] "
  },
  {
    "dateTime": "2022-05-06 07:02:24",
    "loggingLevel": "Error",
    "loggingCode": "",
    "loggingComponent": "CBS",
    "message": "Failed to load Session:1528_32728250 [HRESULT = 0x80070002 - ERROR_FILE_NOT_FOUND]"
  }
]
Success to create file with format json...
```

### Example Converting JSON file to log file
```sell
> mytools -t text -o D:\Project

Process create file in parent at this folder...

2022-05-06 06:56:04 Error [0x060126] IBS CallBack_ImageWasSelectedInUi: An error occurred while removing the MultiEdition key from the blackboard.[gle=0x00000490]
2022-05-06 07:02:24 Error  CBS Failed to load Session:1528_32728250 [HRESULT = 0x80070002 - ERROR_FILE_NOT_FOUND]

Success to create file with format text...


D:\Project\Backend\mytools>
```
