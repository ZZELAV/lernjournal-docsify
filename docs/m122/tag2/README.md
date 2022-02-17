# Tag 2

## 1 Beuteblatt

## 2 Auftrag Ausgaben formatieren und umleiten 1

- **Erstellen Sie eine Tabelle als Textdatei alle Dienste. Die Tabelle soll Name und Status anzeigen, nach Status sortiert und gruppiert (Format-Table -GroupBy) sein.**  
get-service | sort-object status | format-table -property name, status | out-file -filepath C:\Temp\service.txt

- **Geben Sie alle Alias (Get-Alias) als HTML-Tabelle aus, die den Namen und die Definition des Alias beinhalten soll.**  
get-alias | convertto-html -property name, definition | out-file C:\Temp\alias.html

- **Geben Sie die Anzahl Ereignisse der Ereignisanzeige "Anwendung" vom heuteigen Tag aus! Hinweis: Count-Eigenschaft von Measure-Object!**  
get-eventlog -logname application -after 14.02.2022 | measure-object | format-table -property count

- **Geben Sie Name, Status und Starttyp aller Dienste sortiert und gruppiert nach Status aus!**  
get-service | sort-object status | format-table -property name, status, starttype

- **Exportieren Sie alle Services, welche den Starttyp "Manuell" aufweisen in ein CSV.**  
get-service | where {$_.starttype -eq "Manual"} | select-object -property name, starttype | export-csv -path "C:\Temp\services.csv" -delimiter ";"

- **Geben Sie alle Computerinformationen (Get-Computerinfo) in der Datei c:/tmp/config.txt aus! Es kann sein, dass ein Grossteil der Eigenschaften keinen Wert aufweisen.**  
get-computerinfo | out-file C:\Temp\config.txt

- **Geben Sie die Computerinformationen, welche mit OS starten in der Datei c:/tmp/OSconfig.txt aus!**  
get-computerinfo -property OS* | out-file C:\Temp\OSConfig.txt

- **Geben Sie Name und Kommandotyp aller PS-Befehle, sortiert nach Name in einer grafischen Tabelle, in einem separaten Fenster aus!**  
get-command | select-object -property commandtype, name | sort-object name | out-gridview

- **Geben Sie für das Subnetz 192.168.102.0/24 alle IP-Adressen aus! Hinweis: ForEach-Object verwenden!**  
  1..254 | foreach-object -process {get-ciminstance -class win32_pingstatus -filter ("Address='192.168.102.$_'")} | select-object -property address, responsetime

- **Geben Sie die Daten aller Tage (1. Januar bis 31. Dezember) des aktuellen Jahres aus! Hinweis: ForEach-Object verwenden!**  