# Tag 1

## 1 Polymorphie

Polymorphie ist die Vielgestaltigkeit von Klassen. Damit können mehrere Methoden mit dem gleichem Namen erstellt werden und unterschiedliche Ergebnisse geliefert werden.

> [!NOTE]
> Statische Polymorphie:  
> Methoden überschreiben (verschiedene Parameter)
> ---
> Dynamische Polymorphie:  
> Methoden werden in Subklassen überschrieben (dadurch ergibt sich ein anderes Verhalten der Klasse)

**Statische Polymorphie**

```java
public class Ueberladen {

    public static void main(String[] args) {
        Ueberladen u = new Ueberladen();
        u.print("Hallo");
        u.print("Moin", "Klaus");
    }

    private void print(String txt) {
        System.out.println(txt);
    }

    private void print(String txt, String name) {
        System.out.println(txt + " " + name);
    }
}
```

**Dynamische Polymorphie**

```java
public class Polymorphie {

    public Polymorphie() {
        Tier[] tiere = { new Vogel(), new Wurm() };
        for (int i = 0; i < tiere.length; i++) {
            tiere[i].bewegtSich();
            tiere[i].zwitscher();   // Fehler
            tiere[i].frisst();      // Fehler
        }
    }

    public static void main(String[] args) {
        new Polymorphie();
    }
}

class Tier {
    void bewegtSich() {
        System.out.println("Schwimmen, laufen, kriechen, hüpfen oder fliegen?");
    }
}

class Vogel extends Tier {
    @Override
    void bewegtSich() {
        System.out.println("Ich fliege");
    }

    void zwitscher() {
        System.out.println("tirilli");
    }

    void frisst() {
        System.out.println(getClass() + " frisst");
    }
}

class Wurm extends Tier {
    @Override
    void bewegtSich() {
        System.out.println("Ich krieche");
    }

    void frisst() {
        System.out.println(getClass() + " frisst");
    }
}
```

## 2 Vererbung

Mit der Vererbung können Methoden von Klassen wiederverwendbar gestaltet werden. Dies kann sehr komplex werden, daher lohnt es sich ein UML-Diagramm dazu zu zeichnen.

> [!NOTE]
> Grundprinzip:  
> Superklasse mit NUR den notwendigsten Attributen und Methoden  
> Subklassen erweitern dann die Superklasse

![Bild Vererbung](../_img/vererbung.jpg)

## 3 Beispiele

### 3.1 BZT1

```java
package ch.bztf;

/**
 * Hello world!
 *
 */
public class App
{

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args)
    {
    Lehrer mt = new Lehrer();
    mt.setNachname("Inauen");
    mt.setFachbereich("Informatik");

    Lernende mus = new Lernende();
    mus.setNachname("Muster");
    mus.setNummer(1001);

    System.out.println("Nachname des Lehrers: " + mt.getNachname());
    System.out.println("Fachbereich des Lehrers: " + mt.getFachbereich());

    System.out.println("Nachname des Lernenden: " + mus.getNachname());
    System.out.println("Nummer des Lernenden: " + mus.getNummer());
    }
}
```

```java
package ch.bztf;

public class Lehrer
{
    private String fachbereich = new String(); // ein String ist eine Klasse, 
                                            // das geht deshalb mit new!
    private String nachname;

    public void setNachname(String nachname)
    {
        this.nachname = nachname;
    }

    public String getNachname()
    {
        return nachname;
    }

    public void setFachbereich(String fachbereich)
    {
        this.fachbereich = fachbereich;
    }

    public String  getFachbereich()
    {
        return fachbereich;
    }
}
```

```java
package ch.bztf;

public class Lernende
{
    private String nachname = new String(); // new ist optional
    private int nummer;  // Schülernummer

    public void setNachname(String nachname)
    {
        this.nachname = nachname;
    }

    public String getNachname()
    {
        return nachname;
    }

    public void setNummer(int nummer)
    {
        this.nummer = nummer;
    }

    public int getNummer()
    {
        return nummer;
    }  
}
```

Das ist ein schlechtes Beispiel, denn es gibt doppelten Code, z.B. die Methoden `setNachname(String nachname)` und `getNachname()` gibt es in zwei Klassen. Auch die Erweiterung der Methoden würde sehr mühsam sein, denn man müsste es immer an allen Orten ändern. Um den doppelten Code zu verhindern, kann man die **Vererbung** nutzen.

### 3.2 BZT2

```java
package ch.bztf;

/**
 * Hello world!
 *
 */
public class App
{

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args)
    {
    Lehrer mt = new Lehrer();
    mt.setNachname("Inauen");
    mt.setFachbereich("Informatik");

    Lernende mus = new Lernende();
    mus.setNachname("Muster");
    mus.setNummer(1001);

    System.out.println("Nachname des Lehrers: " + mt.getNachname());
    System.out.println("Fachbereich des Lehrers: " + mt.getFachbereich());

    System.out.println("Nachname des Lernenden: " + mus.getNachname());
    System.out.println("Nummer des Lernenden: " + mus.getNummer());
    }
}
```

```java
package ch.bztf;

public class Person {
    
    private String nachname;

    public void setNachname(String nachname)
    {
        this.nachname = nachname;
    }

    public String getNachname()
    {
        return nachname;
    }

}
```

```java
package ch.bztf;

public class Lehrer extends Person
{
    private String fachbereich = new String(); // ein String ist eine Klasse, 
                                            // das geht deshalb mit new!

    public void setFachbereich(String fachbereich)
    {
        this.fachbereich = fachbereich;
    }

    public String  getFachbereich()
    {
        return fachbereich;
    }
}
```

```java
package ch.bztf;

public class Lernende extends Person
{
    private int nummer;  // Schülernummer

    public void setNummer(int nummer)
    {
        this.nummer = nummer;
    }

    public int getNummer()
    {
        return nummer;
    }  
}
```

In diesem Beispiel wurde der doppelte Code in eine Klasse zusammengefasst (auch Superklasse genannt). Somit können mit dem Argument `extends ...` die Methoden der Superklasse mitgenommen werden.

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
class Lehrer {
    - fachbereich : String
    + getFachbereich() : String 
    + setFachbereich(String fachbereich) : void
}
class Lernende {
    - nummer : int 
    + setNummer(int nummer) : void
    + getNummer() : int
}

Person <|-- Lehrer : "extends"
Person <|-- Lernende : "extends"
```

---

Quellen: [Skript Moodle](https://moodle.bztf.ch/pluginfile.php/151838/mod_resource/content/1/site/01_script/100_EinfuehrungModul/#11-vererbung-erklarung), [Bild Vererbung](https://www.python-lernen.de/bilder/oop-hierarchie-tier-hund-katze-02.jpg)