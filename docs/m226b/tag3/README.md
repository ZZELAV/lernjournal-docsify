# Tag 3

## 1 Zwischenstop GeomObjects

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
        RechtWinkligesDreieck aDreieck = new RechtWinkligesDreieck(6, 3);
        Kreis aKreis = new Kreis(3.5);
        Viereck aViereck = new Viereck(2.5, 3.5);

        System.out.println(aDreieck.vorstellen());
        System.out.println(aKreis.vorstellen());
        System.out.println(aViereck.vorstellen());
    }
}
```

```java
package ch.bztf;

public class GeomObject {
    protected double flaeche, umfang;

    public String vorstellen() {
        String output = "Ich bin ein Geom-Object - Meine Flaeche ist " + flaeche + " und mein Umfang ist " + umfang + " und das als ";
        return output;
    }
}
```

```java
package ch.bztf;

public class RechtWinkligesDreieck extends GeomObject {
    private double seitea, seiteb, seitec;

    public RechtWinkligesDreieck(double seitea, double seiteb) {
        this.seitea = seitea;
        this.seiteb = seiteb;
        berechneUmfang();
        berechneFlaeche();
    }

    public void berechneUmfang() {
        seitec = Math.sqrt((Math.pow(seitea, 2)) + (Math.pow(seiteb, 2))); // pythagoras
        umfang = seitea + seiteb + seitec;
    }

    public void berechneFlaeche() {
        flaeche = (seitea * seiteb) / 2;
    }

    @Override
    public String vorstellen() {
        return super.vorstellen() + "Dreieck.";
    }
}
```

```java
package ch.bztf;

public class Kreis extends GeomObject {
    private double radius;

    public Kreis(double radius) {
        this.radius = radius;
        berechneUmfang();
        berechneFlaeche();
    }

    public void berechneUmfang() {
        umfang = 2 * radius * Math.PI;
    }

    public void berechneFlaeche() {
        flaeche = Math.PI * Math.pow(radius, 2);
    }

    @Override
    public String vorstellen() {
        return super.vorstellen() + "Kreis.";
    }
}
```

```java
package ch.bztf;

public class Viereck extends GeomObject {
    private double seitea, seiteb;

    public Viereck(double seitea, double seiteb) {
        this.seitea = seitea;
        this.seiteb = seiteb;
        berechneUmfang();
        berechneFlaeche();
    }

    public void berechneUmfang() {
        umfang = (seitea + seiteb) * 2;
    }

    public void berechneFlaeche() {
        flaeche = seitea * seiteb;
    }

    @Override
    public String vorstellen() {
        return super.vorstellen() + "Viereck.";
    }
}
```

UML:  
```plantuml
class App {
    + main(String[] args) : void
}

class GeomObject {
    # flaeche : double
    # umfang : double
    + vorstellen() : String
}

class RechtWinkligesDreieck {
    - seitea : double
    - seiteb : double
    - seitec : double
    + RechtWinkligesDreieck(double seitea, double seiteb)
    + berechneUmfang() : void
    + berechneFlaeche() : void
    + vorstellen() : String
}

class Kreis {
    - radius : double
    + Kreis(double radius)
    + berechneUmfang() : void
    + berechneFlaeche() : void
    + vorstellen() : String
}

class Viereck {
    - seitea : double
    - seiteb : double
    + Viereck(double seitea, double seiteb)
    + berechneUmfang() : void
    + berechneFlaeche() : void
    + vorstellen() : String
}

GeomObject <|-- RechtWinkligesDreieck : "extends"
GeomObject <|-- Kreis : "extends"
GeomObject <|-- Viereck : "extends"
```