# Tag 2

<tagbar>
    <p>BZT3</p><p>BZT4</p>
</tagbar>

## 1 Beispiele

## 1.1 BZT3

```java
package ch.bztf;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        Person pers1 = new Person();
        pers1.setNachname("Muster");

        Lernende lern1 = new Lernende();
        lern1.setNachname("Moritz");
        lern1.setNummer(4711);

        Lehrer lehr1 = new Lehrer();
        lehr1.setNachname("Lempel");
        lehr1.setFachbereich("RitschRatschMühle");
        lehr1.setPersonalNummer(12345);

        Angestellte ange1 = new Angestellte();
        ange1.setNachname("Verwalti");
        ange1.setPersonalNummer(54321);
        ange1.setSchulleitung(true);

        System.out.println("Ich heisse " + pers1.getNachname());
        System.out.println(lern1.vorstellen());
        System.out.println(lehr1.vorstellen());
        System.out.println(ange1.vorstellen());
    }
}

```

```java
package ch.bztf;

public class Person {
    private String nachname;

    public void setNachname(String nachname) {
        this.nachname = nachname;
    }

    public String getNachname() {
        return nachname;
    }
}
```

```java
package ch.bztf;

public class Mitarbeiter extends Person {
    private int personalNummer;

    public void setPersonalNummer(int personalNummer) {
        this.personalNummer = personalNummer;
    }

    public int getPersonalNummer() {
        return personalNummer;
    }
}
```

```java
package ch.bztf;

public class Lernende extends Person {
    private int nummer;

    public void setNummer(int nummer) {
        this.nummer = nummer;
    }

    public int getNummer() {
        return nummer;
    }

    public String vorstellen() {
        String output = "Ich heisse " + getNachname() + ". Meine Nummer ist " + getNummer();
        return output;
    }
}
```

```java
package ch.bztf;

public class Lehrer extends Mitarbeiter {
    private String fachbereich;

    public void setFachbereich(String fachbereich) {
        this.fachbereich = fachbereich;
    }

    public String getFachbereich() {
        return fachbereich;
    }

    public String vorstellen() {
        String output = "Guten Tag, ich heisse " + getNachname() + ". Ich lehre " + getFachbereich() + " und meine Personalnummer ist " + getPersonalNummer() + ".";
        return output;
    }
}
```

```java
package ch.bztf;

public class Angestellte extends Mitarbeiter {
    private boolean schulleitung;

    public void setSchulleitung(boolean schulleitung) {
        this.schulleitung = schulleitung;
    }

    public boolean isSchulleitung() {
        return schulleitung;
    }

    public String vorstellen() {
        if(isSchulleitung() == false) {
            String output = "Guten Tag, ich heisse " + getNachname() + ". Meine Personalnummer ist " + getPersonalNummer() + " und ich bin einfacher Angestellter.";
            return output;
        } else {
            String output = "Guten Tag, ich heisse " + getNachname() + ". Meine Personalnummer ist " + getPersonalNummer() + " und ich bin Schulleitungsmitglied.";
            return output;
        }
    }
}
```

UML:  
```plantuml
class App {
    + main(String[] args) : void
}
class Person {
    - nachname : String
    + setNachname(String nachname) : void
    + getNachname() : String
}
class Mitarbeiter {
    - personalNummer : int
    + setPersonalNummer(int personalNummer) : void
    + getPersonalNummer() : int
}
class Lehrer {
    - fachbereich : String
    + getFachbereich() : String 
    + setFachbereich(String fachbereich) : void
    + vorstellen() : String
}
class Angestellte {
    - schulleitung : boolean
    + setSchulleitung(boolean schulleitung) : void
    + isSchulleitung() : boolean
    + vorstellen() : String
}
class Lernende {
    - nummer : int 
    + setNummer(int nummer) : void
    + getNummer() : int
    + vorstellen() : String
}

Person <|-- Mitarbeiter : "extends"
Person <|-- Lernende : "extends"
Mitarbeiter <|-- Lehrer : "extends"
Mitarbeiter <|-- Angestellte : "extends"
```

## 1.2 BZT4

```java
package ch.bztf;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        Person pers1 = new Person("Muster");

        Lernende lern1 = new Lernende("Moritz", 4711);

        Lehrer lehr1 = new Lehrer("Lempel", 12345, "RitschRatschMühle");

        Angestellte ange1 = new Angestellte("Verwalti", 54321, true);

        Angestellte ange2 = new Angestellte("Schläffrig", 345, false);

        System.out.println(pers1.vorstellen());
        System.out.println(lern1.vorstellen());
        System.out.println(lehr1.vorstellen());
        System.out.println(ange1.vorstellen());
        System.out.println(ange2.vorstellen());
    }
}
```

```java
package ch.bztf;

public class Person {
    protected String nachname;

    protected Person(String nachname) {
        this.nachname = nachname;
    }

    public void setNachname(String nachname) {
        this.nachname = nachname;
    }

    public String getNachname() {
        return nachname;
    }

    public String vorstellen() {
        String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";
        return output;
    }
}
```

```java
package ch.bztf;

public class Mitarbeiter extends Person {
    protected int personalNummer;

    protected Mitarbeiter(String nachname, int personalNummer) {
        super(nachname);
        this.personalNummer = personalNummer;
    }

    protected Mitarbeiter(String nachname) {
        super(nachname);
    }

    public void setPersonalNummer(int personalNummer) {
        this.personalNummer = personalNummer;
    }

    public int getPersonalNummer() {
        return personalNummer;
    }
}
```

```java
package ch.bztf;

public class Lernende extends Person {
    private int nummer;

    public Lernende(String nachname) {
        super(nachname);
    }

    public Lernende(String nachname, int nummer) {
        super(nachname);
        this.nummer = nummer;
    }

    public void setNummer(int nummer) {
        this.nummer = nummer;
    }

    public int getNummer() {
        return nummer;
    }

    public String vorstellen() {
        String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ". " + "Meine Nummer ist " + getNummer();
        return output;
    }
}
```

```java
package ch.bztf;

public class Lehrer extends Mitarbeiter {
    private String fachbereich;

    public Lehrer(String nachname, int personalNummer, String fachbereich) {
        super(nachname, personalNummer);
        this.fachbereich = fachbereich;
    }

    public void setFachbereich(String fachbereich) {
        this.fachbereich = fachbereich;
    }

    public String getFachbereich() {
        return fachbereich;
    }

    public String vorstellen() {
        String output = "Guten Tag, ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ". Ich lehre " + getFachbereich() + " und meine Personalnummer ist " + getPersonalNummer() + ".";
        return output;
    }
}
```

```java
package ch.bztf;

public class Angestellte extends Mitarbeiter {
    private boolean schulleitung;

    public Angestellte(String nachname) {
        super(nachname);
    }

    public Angestellte(String nachname, int personalNummer) {
        super(nachname, personalNummer);
    }

    public Angestellte(String nachname, int personalNummer, boolean schulleitung) {
        super(nachname, personalNummer);
        this.schulleitung = schulleitung;
    }

    public void setSchulleitung(boolean schulleitung) {
        this.schulleitung = schulleitung;
    }

    public boolean isSchulleitung() {
        return schulleitung;
    }

    public String vorstellen() {
        if(isSchulleitung() == false) {
            String output = "Guten Tag, ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ". Meine Personalnummer ist " + getPersonalNummer() + " und ich bin einfacher Angestellter.";
            return output;
        } else {
            String output = "Guten Tag, ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ". Meine Personalnummer ist " + getPersonalNummer() + " und ich bin Schulleitungsmitglied.";
            return output;
        }
    }
}
```

UML:  
```plantuml
class App {
    + main(String[] args) : void
}
class Person {
    # nachname : String
    # Person(String nachname)
    + setNachname(String nachname) : void
    + getNachname() : String
    + vorstellen() : String
}
class Mitarbeiter {
    # personalNummer : int
    # Mitarbeiter(String nachname, int personalNummer)
    # Mitarbeiter(String nachname)
    + setPersonalNummer(int personalNummer) : void
    + getPersonalNummer() : int
    + vorstellen() : String
}
class Lehrer {
    - fachbereich : String
    + Lehrer(String nachname, int personalnummer, String fachbereich)
    + getFachbereich() : String 
    + setFachbereich(String fachbereich) : void
    + vorstellen() : String
}
class Angestellte {
    - schulleitung : boolean
    + Angestellte(String nachname)
    + Angestellte(String nachname, int personalNummer)
    + setSchulleitung(boolean schulleitung) : void
    + isSchulleitung() : boolean
    + vorstellen() : String
}
class Lernende {
    - nummer : int 
    + Lernende(String nachname)
    + setNummer(int nummer) : void
    + getNummer() : int
    + vorstellen() : String
}

Person <|-- Mitarbeiter : "extends"
Person <|-- Lernende : "extends"
Mitarbeiter <|-- Lehrer : "extends"
Mitarbeiter <|-- Angestellte : "extends"
```

---

Quellen: [Skript Moodle](https://moodle.bztf.ch/pluginfile.php/151838/mod_resource/content/1/site/01_script/140_beispiel3/)