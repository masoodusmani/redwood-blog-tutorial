# Migration `20201101123539-create-contact`

This migration has been generated by Masood Usmani at 11/1/2020, 1:35:39 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201101112251-update-posts..20201101123539-create-contact
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -17,4 +17,12 @@
   title     String
   body      String
   createdAt DateTime @default(now())
 }
+
+model Contact {
+  id        String   @id @default(cuid())
+  name      String
+  email     String
+  message   String
+  createdAt DateTime @default(now())
+}
```


