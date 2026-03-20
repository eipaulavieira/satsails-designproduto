# Tokens de Design

## Hierarquia

```
Tokens Primitivos (valores brutos)
        ↓
Tokens Semânticos (significado de uso)
        ↓
Componentes (consomem os tokens semânticos)
```

## Tokens primitivos (cores)

```css
--orange-500: #F7931A;
--orange-400: #FF9800;
--red-600:    #CF1C0E;
--green-500:  #00C853;
--gray-700:   #333333;
--black-900:  #0C0B0D;
--white:      #FFFFFF;
--gray-300:   #D1D2D2;
```

## Tokens semânticos

```css
--color-primary:   var(--orange-500);
--color-accent:    var(--orange-400);
--color-danger:    var(--red-600);
--color-success:   var(--green-500);
--color-text:      var(--gray-700);
--color-bg:        var(--black-900);
--color-surface:   var(--white);
--color-border:    var(--gray-300);
```
