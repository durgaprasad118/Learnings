## Follow these steps

[Steps from daily code](https://projects.100xdevs.com/tracks/gZf9uBBNSbBR7UCqyyqT/prisma-4)

- npx prisma init

  - generates a primsa/schema.prisma file in which we need to enter the `db Provider` and `db_url` from env file

- Writing model

  - @id - primary key
  - @default(autoincrement())
    - this specifies like in todos ( completed as false)

- when you update the schema you run this migration command
- `npx prisma migrate dev --name SomeName`
- when you update
- a new file is created in the migrations file

## Client

- auto generated clients
- Like we get User for using User.create() is genearted client automatically
- `Db_Client - anything that lets you talk to your db`
- Command - `npx prisma generate` generates PRISMA CLIENT IN node_modules

## Relations

`  user User @relation(fields: [userId],references: [id])`

- user - feild
- User is the Schema
- @relation is the relation
- fields :[userId] of this table
- reference [id] of the related table
