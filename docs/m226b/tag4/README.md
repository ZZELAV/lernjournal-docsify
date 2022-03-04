# Tag 4

<tagbar>
    <p>BZT7</p><p>BZT8</p><p>BZT9</p>
</tagbar>

## 1 Beispiele

### 1.1 BZT7

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

        System.out.println(pers1.toString());
        System.out.println(lern1.toString());
        System.out.println(lehr1.toString());
        System.out.println(ange1.toString());
        System.out.println(ange2.toString());

        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");

        ange1.heiraten(ange2);
        lehr1.heiraten(lehr1);
        ange2.heiraten(lehr1);

        ange1.scheiden();
        ange2.scheiden();
        lehr1.scheiden();

        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");

        System.out.println(ange1.equals(ange1));
        System.out.println(ange1.equals(ange2));
        Angestellte ange3 = new Angestellte("Schläffrig");
        System.out.println(ange2.equals(ange3));
        Angestellte ange4 = new Angestellte("Hampelmann");
        System.out.println(ange1.equals(ange4));
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

    // public String vorstellen() {
    //     String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";
    //     return output;
    // }

    @Override
    public String toString() {
        return nachname + " (Attributquelle: Klasse Person) - " + getClass() + ".";
    }

    private Person ehepartner = null;   // Die Referenz auf den Ehepartner wird erstellt, aber auf null gesetzt
                                    // einAngestellter.heiraten(eineAngestellte); Als Hinweis: Der Aufruf im main!
    protected void heiraten(Person ehepartner) // 
    {
        if (this != ehepartner) // überprüfung ob nicht selber
        {
            if(this.ehepartner == null && ehepartner.ehepartner == null) // wenn beide noch nicht verheiratet sind
            {
                this.ehepartner = ehepartner; //  person auf ehepartner setzen
                ehepartner.ehepartner = this; // ?

                System.out.println(nachname + " und " + ehepartner.getNachname() + " haben geheiratet. ");
            }
            else // wenn mind. jemand bereits verheiratet ist
            {
                System.out.println(nachname + " und " + ehepartner.getNachname() + " können nicht heiraten, " + "weil mindestens einer bereits verheiratet ist! ");
            }
        }
        else // wenn selber
        {
            System.out.println(nachname + " kann sich nicht selber heiraten!");
        }
    }

    protected void scheiden() {
        if (ehepartner != null) {
            Person temp = ehepartner;
            ehepartner.ehepartner = null;
            this.ehepartner = null;

            System.out.println(nachname + " und " + temp.getNachname() + " haben sich geschieden.");
        } else {
            System.out.println(nachname + " ist nicht verheiratet.");
        }
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        } else if (obj == null) {
            return false;
        } else if (obj.getClass() == getClass() && this.hashCode() == ((Person)obj).hashCode()) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public int hashCode() {
        return super.hashCode();
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

    // @Override
    // public String vorstellen() {
    //     return super.vorstellen() + " Meine Personalnummer ist " + getPersonalNummer() + " und ich";
    // }

    @Override
    public String toString() {
        return super.toString() + " - Personalnummer: " + getPersonalNummer() + " (Attributquelle: Klasse Mitarbeiter).";
    }

    @Override
    public int hashCode() {
        return super.hashCode();
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

    // @Override
    // public String vorstellen() {
    //     return super.vorstellen() + " Meine Nummer ist " + getNummer();
    // }

    @Override
    public String toString() {
        return super.toString() + " - Nummer: " + getNummer() + " (Attributquelle: Klasse Lernende).";
    }

    @Override
    public int hashCode() {
        return super.hashCode();
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

    // @Override
    // public String vorstellen() {
    //     return super.vorstellen() + " lehre " + getFachbereich();
    // }

    @Override
    public String toString() {
        return super.toString() + " - Fachbereich: " + getFachbereich() + " (Attributquelle: Klasse Lehrer).";
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

    // @Override
    // public String vorstellen() {
    //     if(isSchulleitung() == false) {
    //         return super.vorstellen() + " bin einfacher Angestellter";
    //     } else {
    //         return super.vorstellen() + " bin Schulleitungsmitglied";
    //     }
    // }

    @Override
    public String toString() {
        return super.toString() + " - In Schulleitung?: " + isSchulleitung();
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
    - ehepartner : Person
    # Person(String nachname)
    + setNachname(String nachname) : void
    + getNachname() : String
    + vorstellen() : String
    # heiraten(Person ehepartner) : void
    # scheiden() : void
    + toString() : String
    + hashCode() : int
    + equals(Object obj) : boolean
    + hashCode() : int
}
class Mitarbeiter {
    # personalNummer : int
    # Mitarbeiter(String nachname, int personalNummer)
    # Mitarbeiter(String nachname)
    + setPersonalNummer(int personalNummer) : void
    + getPersonalNummer() : int
    + vorstellen() : String
    + toString() : String
    + hashCode() : int
}
class Lehrer {
    - fachbereich : String
    + Lehrer(String nachname, String fachbereich)
    + Lehrer(String nachname, int personalnummer)
    + Lehrer(String nachname, int personalnummer, String fachbereich)
    + getFachbereich() : String 
    + setFachbereich(String fachbereich) : void
    + vorstellen() : String
    + toString() : String
}
class Angestellte {
    - schulleitung : boolean
    + Angestellte(String nachname)
    + Angestellte(String nachname, int personalNummer)
    + setSchulleitung(boolean schulleitung) : void
    + isSchulleitung() : boolean
    + vorstellen() : String
    + toString() : String
}
class Lernende {
    - nummer : int 
    + Lernende(String nachname)
    + setNummer(int nummer) : void
    + getNummer() : int
    + vorstellen() : String
    + toString() : String
    + hashCode() : int
}

Person <|-- Mitarbeiter : "extends"
Person <|-- Lernende : "extends"
Mitarbeiter <|-- Lehrer : "extends"
Mitarbeiter <|-- Angestellte : "extends"

Person "1" o-- Person
```

### 1.2 BZT8

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
        Lernende lern1 = new Lernende("Moritz", 4711);

        Lehrer lehr1 = new Lehrer("Lempel", 12345, "RitschRatschMühle");

        Angestellte ange1 = new Angestellte("Verwalti", 54321, true);

        Angestellte ange2 = new Angestellte("Schläffrig", 345, false);
        
        System.out.println(lern1.toString());
        System.out.println(lehr1.toString());
        System.out.println(ange1.toString());
        System.out.println(ange2.toString());

        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");

        ange1.heiraten(ange2);
        lehr1.heiraten(lehr1);
        ange2.heiraten(lehr1);

        ange1.scheiden();
        ange2.scheiden();
        lehr1.scheiden();

        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");

        System.out.println(ange1.equals(ange1));
        System.out.println(ange1.equals(ange2));
        Angestellte ange3 = new Angestellte("Schläffrig");
        System.out.println(ange2.equals(ange3));
        Angestellte ange4 = new Angestellte("Hampelmann");
        System.out.println(ange1.equals(ange4));
    }
}
```

```java
package ch.bztf;

abstract class Person {
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

    // public String vorstellen() {
    //     String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";
    //     return output;
    // }

    @Override
    public String toString() {
        return nachname + " (Attributquelle: Klasse Person) - " + getClass() + ".";
    }

    private Person ehepartner = null;   // Die Referenz auf den Ehepartner wird erstellt, aber auf null gesetzt
                                    // einAngestellter.heiraten(eineAngestellte); Als Hinweis: Der Aufruf im main!
    protected void heiraten(Person ehepartner) // 
    {
        if (this != ehepartner) // überprüfung ob nicht selber
        {
            if(this.ehepartner == null && ehepartner.ehepartner == null) // wenn beide noch nicht verheiratet sind
            {
                this.ehepartner = ehepartner; //  person auf ehepartner setzen
                ehepartner.ehepartner = this; // ?

                System.out.println(nachname + " und " + ehepartner.getNachname() + " haben geheiratet. ");
            }
            else // wenn mind. jemand bereits verheiratet ist
            {
                System.out.println(nachname + " und " + ehepartner.getNachname() + " können nicht heiraten, " + "weil mindestens einer bereits verheiratet ist! ");
            }
        }
        else // wenn selber
        {
            System.out.println(nachname + " kann sich nicht selber heiraten!");
        }
    }

    protected void scheiden() {
        if (ehepartner != null) {
            Person temp = ehepartner;
            ehepartner.ehepartner = null;
            this.ehepartner = null;

            System.out.println(nachname + " und " + temp.getNachname() + " haben sich geschieden.");
        } else {
            System.out.println(nachname + " ist nicht verheiratet.");
        }
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        } else if (obj == null) {
            return false;
        } else if (obj.getClass() == getClass() && this.hashCode() == ((Person)obj).hashCode()) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

}
```

```java
package ch.bztf;

abstract class Mitarbeiter extends Person {
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

    // @Override
    // public String vorstellen() {
    //     return super.vorstellen() + " Meine Personalnummer ist " + getPersonalNummer() + " und ich";
    // }

    @Override
    public String toString() {
        return super.toString() + " - Personalnummer: " + getPersonalNummer() + " (Attributquelle: Klasse Mitarbeiter).";
    }

    @Override
    public int hashCode() {
        return super.hashCode();
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

    // @Override
    // public String vorstellen() {
    //     return super.vorstellen() + " Meine Nummer ist " + getNummer();
    // }

    @Override
    public String toString() {
        return super.toString() + " - Nummer: " + getNummer() + " (Attributquelle: Klasse Lernende).";
    }

    @Override
    public int hashCode() {
        return super.hashCode();
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

    // @Override
    // public String vorstellen() {
    //     return super.vorstellen() + " lehre " + getFachbereich();
    // }

    @Override
    public String toString() {
        return super.toString() + " - Fachbereich: " + getFachbereich() + " (Attributquelle: Klasse Lehrer).";
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

    // @Override
    // public String vorstellen() {
    //     if(isSchulleitung() == false) {
    //         return super.vorstellen() + " bin einfacher Angestellter";
    //     } else {
    //         return super.vorstellen() + " bin Schulleitungsmitglied";
    //     }
    // }

    @Override
    public String toString() {
        return super.toString() + " - In Schulleitung?: " + isSchulleitung();
    }
}
```

### 1.3 BZT9

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
        Lernende lern1 = new Lernende("Moritz", 4711);

        Lehrer lehr1 = new Lehrer("Lempel", 12345, "RitschRatschMühle");

        Angestellte ange1 = new Angestellte("Verwalti", 54321, true);

        Angestellte ange2 = new Angestellte("Schläffrig", 345, false);

        System.out.println(lern1.toString());
        System.out.println(lehr1.toString());
        System.out.println(ange1.toString());
        System.out.println(ange2.toString());

        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");

        ange1.heiraten(ange2);
        lehr1.heiraten(lehr1);
        ange2.heiraten(lehr1);

        ange1.scheiden();
        ange2.scheiden();
        lehr1.scheiden();

        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");

        System.out.println(ange1.equals(ange1));
        System.out.println(ange1.equals(ange2));
        Angestellte ange3 = new Angestellte("Schläffrig");
        System.out.println(ange2.equals(ange3));
        Angestellte ange4 = new Angestellte("Hampelmann");
        System.out.println(ange1.equals(ange4));

        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");

        // Anzahl wird auf 3 gesetzt, mindestkonsum ist allerdings auf 4
        System.out.println("Bitte als Angestellter Fr. " + ange1.kantineKonsum(3) + " bezahlen.");

        // Anzahl wird auf 5 gesetzt, mindestkonsum ist allerdings auf 8
        System.out.println("Bitte als Lehrer Fr. " + lehr1.kantineKonsum(5) + " bezahlen.");

        // Lernender hat kein mindestkonsum. Dazu bekommt er noch 10% Rabatt
        System.out.println("Bitte als Lernender Fr. " + lern1.kantineKonsum(7) + " bezahlen.");
    }
}
```

```java
package ch.bztf;

abstract class Person {
    protected String nachname;
    protected final double minpreis = 2.50;

    protected Person(String nachname) {
        this.nachname = nachname;
    }

    public void setNachname(String nachname) {
        this.nachname = nachname;
    }

    public String getNachname() {
        return nachname;
    }

    // public String vorstellen() {
    //     String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";
    //     return output;
    // }

    @Override
    public String toString() {
        return nachname + " (Attributquelle: Klasse Person) - " + getClass() + ".";
    }

    private Person ehepartner = null;   // Die Referenz auf den Ehepartner wird erstellt, aber auf null gesetzt
                                    // einAngestellter.heiraten(eineAngestellte); Als Hinweis: Der Aufruf im main!
    protected void heiraten(Person ehepartner) // 
    {
        if (this != ehepartner) // überprüfung ob nicht selber
        {
            if(this.ehepartner == null && ehepartner.ehepartner == null) // wenn beide noch nicht verheiratet sind
            {
                this.ehepartner = ehepartner; //  person auf ehepartner setzen
                ehepartner.ehepartner = this; // ?

                System.out.println(nachname + " und " + ehepartner.getNachname() + " haben geheiratet. ");
            }
            else // wenn mind. jemand bereits verheiratet ist
            {
                System.out.println(nachname + " und " + ehepartner.getNachname() + " können nicht heiraten, " + "weil mindestens einer bereits verheiratet ist! ");
            }
        }
        else // wenn selber
        {
            System.out.println(nachname + " kann sich nicht selber heiraten!");
        }
    }

    protected void scheiden() {
        if (ehepartner != null) {
            Person temp = ehepartner;
            ehepartner.ehepartner = null;
            this.ehepartner = null;

            System.out.println(nachname + " und " + temp.getNachname() + " haben sich geschieden.");
        } else {
            System.out.println(nachname + " ist nicht verheiratet.");
        }
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        } else if (obj == null) {
            return false;
        } else if (obj.getClass() == getClass() && this.hashCode() == ((Person)obj).hashCode()) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    public abstract double kantineKonsum(int anzahl);

}
```

```java
package ch.bztf;

abstract class Mitarbeiter extends Person {
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

    // @Override
    // public String vorstellen() {
    //     return super.vorstellen() + " Meine Personalnummer ist " + getPersonalNummer() + " und ich";
    // }

    @Override
    public String toString() {
        return super.toString() + " - Personalnummer: " + getPersonalNummer() + " (Attributquelle: Klasse Mitarbeiter).";
    }

    @Override
    public int hashCode() {
        return super.hashCode();
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

    // @Override
    // public String vorstellen() {
    //     return super.vorstellen() + " Meine Nummer ist " + getNummer();
    // }

    @Override
    public String toString() {
        return super.toString() + " - Nummer: " + getNummer() + " (Attributquelle: Klasse Lernende).";
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public double kantineKonsum(int anzahl) {
        // 10% Rabatt
        return anzahl * minpreis * 0.9;
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

    // @Override
    // public String vorstellen() {
    //     return super.vorstellen() + " lehre " + getFachbereich();
    // }

    @Override
    public String toString() {
        return super.toString() + " - Fachbereich: " + getFachbereich() + " (Attributquelle: Klasse Lehrer).";
    }

    @Override
    public double kantineKonsum(int anzahl) {
        if (anzahl < 8) {
            anzahl = 8;
        }
        return anzahl * minpreis;
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

    // @Override
    // public String vorstellen() {
    //     if(isSchulleitung() == false) {
    //         return super.vorstellen() + " bin einfacher Angestellter";
    //     } else {
    //         return super.vorstellen() + " bin Schulleitungsmitglied";
    //     }
    // }

    @Override
    public String toString() {
        return super.toString() + " - In Schulleitung?: " + isSchulleitung();
    }

    @Override
    public double kantineKonsum(int anzahl) {
        if (anzahl < 4) {
            anzahl = 4;
        }
        return anzahl * minpreis;
    }
}
```

---

Quellen: [Skript Moodle](https://moodle.bztf.ch/pluginfile.php/151838/mod_resource/content/1/site/01_script/180_beispiel7/)