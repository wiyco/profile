import { z } from "zod";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const PostScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "content",
  "thumbnail",
  "createdAt",
  "updatedAt",
  "userId",
]);

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "username",
  "avatar",
  "createdAt",
  "updatedAt",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const QueryModeSchema = z.enum(["default", "insensitive"]);

export const NullsOrderSchema = z.enum(["first", "last"]);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
  id: z
    .string()
    .regex(/^[a-zA-Z0-9_\-=]+$/)
    .length(8),
  title: z.string(),
  content: z.string(),
  thumbnail: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string().nullable(),
});

export type Post = z.infer<typeof PostSchema>;

// POST OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const PostOptionalDefaultsSchema = PostSchema.merge(
  z.object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9_\-=]+$/)
      .length(8)
      .optional(),
    title: z.string().optional(),
    content: z.string().optional(),
    thumbnail: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
);

export type PostOptionalDefaults = z.infer<typeof PostOptionalDefaultsSchema>;

// POST RELATION SCHEMA
//------------------------------------------------------

export type PostRelations = {
  user?: UserWithRelations | null;
};

export type PostWithRelations = z.infer<typeof PostSchema> & PostRelations;

export const PostWithRelationsSchema: z.ZodType<PostWithRelations> = PostSchema.merge(
  z.object({
    user: z.lazy(() => UserWithRelationsSchema).nullable(),
  })
);

// POST OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type PostOptionalDefaultsRelations = {
  user?: UserOptionalDefaultsWithRelations | null;
};

export type PostOptionalDefaultsWithRelations = z.infer<typeof PostOptionalDefaultsSchema> &
  PostOptionalDefaultsRelations;

export const PostOptionalDefaultsWithRelationsSchema: z.ZodType<PostOptionalDefaultsWithRelations> =
  PostOptionalDefaultsSchema.merge(
    z.object({
      user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema).nullable(),
    })
  );

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  avatar: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

// USER OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const UserOptionalDefaultsSchema = UserSchema.merge(
  z.object({
    id: z.string().optional(),
    username: z.string().optional(),
    avatar: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
);

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>;

// USER RELATION SCHEMA
//------------------------------------------------------

export type UserRelations = {
  posts: PostWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations;

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(
  z.object({
    posts: z.lazy(() => PostWithRelationsSchema).array(),
  })
);

// USER OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type UserOptionalDefaultsRelations = {
  posts: PostOptionalDefaultsWithRelations[];
};

export type UserOptionalDefaultsWithRelations = z.infer<typeof UserOptionalDefaultsSchema> &
  UserOptionalDefaultsRelations;

export const UserOptionalDefaultsWithRelationsSchema: z.ZodType<UserOptionalDefaultsWithRelations> =
  UserOptionalDefaultsSchema.merge(
    z.object({
      posts: z.lazy(() => PostOptionalDefaultsWithRelationsSchema).array(),
    })
  );
