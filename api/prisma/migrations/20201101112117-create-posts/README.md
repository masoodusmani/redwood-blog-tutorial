# Migration `20201101112117-create-posts`

This migration has been generated by Masood Usmani at 11/1/2020, 12:21:17 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201101112117-create-posts
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,20 @@
+datasource DS {
+  // optionally set multiple providers
+  // example: provider = ["sqlite", "postgresql"]
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = ["native", "rhel-openssl-1.0.x"]
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+model Post {
+  id        Int      @id @default(autoincrement())
+  title     String
+  body      String
+  createdAt DateTime @default(now())
+}
```


