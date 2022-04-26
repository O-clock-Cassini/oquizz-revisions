## Relation 1,N

1,N -> Relation assez peu commune. Très souvent c'est le 0,N qui est utilisé car la relation 1,N sous entend que l'entité A ne peux exister sans au moins 1 Entité B.


## Relation : 
- OneToOne : 1 vers 1 (1 -> 1) -> FK sur A ou B
- OneToMany : 1 A vers Plusieurs B (1 -> N) -> FK sur B (A_id)
- ManyToMany : Plusieurs vers plusieurs (N -> N) -> Table de liaison entre A et B