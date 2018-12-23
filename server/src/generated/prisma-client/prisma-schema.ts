export const typeDefs = /* GraphQL */ `type AggregateEntry {
  count: Int!
}

type AggregateJournalEntry {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Entry {
  id: ID!
  body: String!
  start: DateTime!
  end: DateTime!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  author: User!
}

type EntryConnection {
  pageInfo: PageInfo!
  edges: [EntryEdge]!
  aggregate: AggregateEntry!
}

input EntryCreateInput {
  body: String!
  start: DateTime!
  end: DateTime!
  tags: TagCreateManyInput
  author: UserCreateOneWithoutPlannerInput!
}

input EntryCreateManyWithoutAuthorInput {
  create: [EntryCreateWithoutAuthorInput!]
  connect: [EntryWhereUniqueInput!]
}

input EntryCreateOneInput {
  create: EntryCreateInput
  connect: EntryWhereUniqueInput
}

input EntryCreateWithoutAuthorInput {
  body: String!
  start: DateTime!
  end: DateTime!
  tags: TagCreateManyInput
}

type EntryEdge {
  node: Entry!
  cursor: String!
}

enum EntryOrderByInput {
  id_ASC
  id_DESC
  body_ASC
  body_DESC
  start_ASC
  start_DESC
  end_ASC
  end_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EntryPreviousValues {
  id: ID!
  body: String!
  start: DateTime!
  end: DateTime!
}

input EntryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  AND: [EntryScalarWhereInput!]
  OR: [EntryScalarWhereInput!]
  NOT: [EntryScalarWhereInput!]
}

type EntrySubscriptionPayload {
  mutation: MutationType!
  node: Entry
  updatedFields: [String!]
  previousValues: EntryPreviousValues
}

input EntrySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EntryWhereInput
  AND: [EntrySubscriptionWhereInput!]
  OR: [EntrySubscriptionWhereInput!]
  NOT: [EntrySubscriptionWhereInput!]
}

input EntryUpdateInput {
  body: String
  start: DateTime
  end: DateTime
  tags: TagUpdateManyInput
  author: UserUpdateOneRequiredWithoutPlannerInput
}

input EntryUpdateManyDataInput {
  body: String
  start: DateTime
  end: DateTime
}

input EntryUpdateManyMutationInput {
  body: String
  start: DateTime
  end: DateTime
}

input EntryUpdateManyWithoutAuthorInput {
  create: [EntryCreateWithoutAuthorInput!]
  delete: [EntryWhereUniqueInput!]
  connect: [EntryWhereUniqueInput!]
  disconnect: [EntryWhereUniqueInput!]
  update: [EntryUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [EntryUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [EntryScalarWhereInput!]
  updateMany: [EntryUpdateManyWithWhereNestedInput!]
}

input EntryUpdateManyWithWhereNestedInput {
  where: EntryScalarWhereInput!
  data: EntryUpdateManyDataInput!
}

input EntryUpdateWithoutAuthorDataInput {
  body: String
  start: DateTime
  end: DateTime
  tags: TagUpdateManyInput
}

input EntryUpdateWithWhereUniqueWithoutAuthorInput {
  where: EntryWhereUniqueInput!
  data: EntryUpdateWithoutAuthorDataInput!
}

input EntryUpsertWithWhereUniqueWithoutAuthorInput {
  where: EntryWhereUniqueInput!
  update: EntryUpdateWithoutAuthorDataInput!
  create: EntryCreateWithoutAuthorInput!
}

input EntryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  author: UserWhereInput
  AND: [EntryWhereInput!]
  OR: [EntryWhereInput!]
  NOT: [EntryWhereInput!]
}

input EntryWhereUniqueInput {
  id: ID
}

type JournalEntry {
  entry: Entry!
  productivityLevel: PRODUCTIVITY_LEVEL
  author: User!
}

type JournalEntryConnection {
  pageInfo: PageInfo!
  edges: [JournalEntryEdge]!
  aggregate: AggregateJournalEntry!
}

input JournalEntryCreateInput {
  entry: EntryCreateOneInput!
  productivityLevel: PRODUCTIVITY_LEVEL
  author: UserCreateOneWithoutJournalInput!
}

input JournalEntryCreateManyWithoutAuthorInput {
  create: [JournalEntryCreateWithoutAuthorInput!]
}

input JournalEntryCreateWithoutAuthorInput {
  entry: EntryCreateOneInput!
  productivityLevel: PRODUCTIVITY_LEVEL
}

type JournalEntryEdge {
  node: JournalEntry!
  cursor: String!
}

enum JournalEntryOrderByInput {
  productivityLevel_ASC
  productivityLevel_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type JournalEntryPreviousValues {
  productivityLevel: PRODUCTIVITY_LEVEL
}

input JournalEntryScalarWhereInput {
  productivityLevel: PRODUCTIVITY_LEVEL
  productivityLevel_not: PRODUCTIVITY_LEVEL
  productivityLevel_in: [PRODUCTIVITY_LEVEL!]
  productivityLevel_not_in: [PRODUCTIVITY_LEVEL!]
  AND: [JournalEntryScalarWhereInput!]
  OR: [JournalEntryScalarWhereInput!]
  NOT: [JournalEntryScalarWhereInput!]
}

type JournalEntrySubscriptionPayload {
  mutation: MutationType!
  node: JournalEntry
  updatedFields: [String!]
  previousValues: JournalEntryPreviousValues
}

input JournalEntrySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JournalEntryWhereInput
  AND: [JournalEntrySubscriptionWhereInput!]
  OR: [JournalEntrySubscriptionWhereInput!]
  NOT: [JournalEntrySubscriptionWhereInput!]
}

input JournalEntryUpdateManyDataInput {
  productivityLevel: PRODUCTIVITY_LEVEL
}

input JournalEntryUpdateManyMutationInput {
  productivityLevel: PRODUCTIVITY_LEVEL
}

input JournalEntryUpdateManyWithoutAuthorInput {
  create: [JournalEntryCreateWithoutAuthorInput!]
  deleteMany: [JournalEntryScalarWhereInput!]
  updateMany: [JournalEntryUpdateManyWithWhereNestedInput!]
}

input JournalEntryUpdateManyWithWhereNestedInput {
  where: JournalEntryScalarWhereInput!
  data: JournalEntryUpdateManyDataInput!
}

input JournalEntryWhereInput {
  entry: EntryWhereInput
  productivityLevel: PRODUCTIVITY_LEVEL
  productivityLevel_not: PRODUCTIVITY_LEVEL
  productivityLevel_in: [PRODUCTIVITY_LEVEL!]
  productivityLevel_not_in: [PRODUCTIVITY_LEVEL!]
  author: UserWhereInput
  AND: [JournalEntryWhereInput!]
  OR: [JournalEntryWhereInput!]
  NOT: [JournalEntryWhereInput!]
}

scalar Long

type Mutation {
  createEntry(data: EntryCreateInput!): Entry!
  updateEntry(data: EntryUpdateInput!, where: EntryWhereUniqueInput!): Entry
  updateManyEntries(data: EntryUpdateManyMutationInput!, where: EntryWhereInput): BatchPayload!
  upsertEntry(where: EntryWhereUniqueInput!, create: EntryCreateInput!, update: EntryUpdateInput!): Entry!
  deleteEntry(where: EntryWhereUniqueInput!): Entry
  deleteManyEntries(where: EntryWhereInput): BatchPayload!
  createJournalEntry(data: JournalEntryCreateInput!): JournalEntry!
  updateManyJournalEntries(data: JournalEntryUpdateManyMutationInput!, where: JournalEntryWhereInput): BatchPayload!
  deleteManyJournalEntries(where: JournalEntryWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum PRODUCTIVITY_LEVEL {
  ONE
  TWO
  THREE
  FOUR
  FIVE
}

type Query {
  entry(where: EntryWhereUniqueInput!): Entry
  entries(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Entry]!
  entriesConnection(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EntryConnection!
  journalEntries(where: JournalEntryWhereInput, orderBy: JournalEntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JournalEntry]!
  journalEntriesConnection(where: JournalEntryWhereInput, orderBy: JournalEntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JournalEntryConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  entry(where: EntrySubscriptionWhereInput): EntrySubscriptionPayload
  journalEntry(where: JournalEntrySubscriptionWhereInput): JournalEntrySubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tag {
  id: ID!
  name: String!
  productivityLevel: PRODUCTIVITY_LEVEL
  color: String
  author: User!
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  name: String!
  productivityLevel: PRODUCTIVITY_LEVEL
  color: String
  author: UserCreateOneWithoutTagsInput!
}

input TagCreateManyInput {
  create: [TagCreateInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateManyWithoutAuthorInput {
  create: [TagCreateWithoutAuthorInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateWithoutAuthorInput {
  name: String!
  productivityLevel: PRODUCTIVITY_LEVEL
  color: String
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  productivityLevel_ASC
  productivityLevel_DESC
  color_ASC
  color_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
  productivityLevel: PRODUCTIVITY_LEVEL
  color: String
}

input TagScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  productivityLevel: PRODUCTIVITY_LEVEL
  productivityLevel_not: PRODUCTIVITY_LEVEL
  productivityLevel_in: [PRODUCTIVITY_LEVEL!]
  productivityLevel_not_in: [PRODUCTIVITY_LEVEL!]
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  AND: [TagScalarWhereInput!]
  OR: [TagScalarWhereInput!]
  NOT: [TagScalarWhereInput!]
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
}

input TagUpdateDataInput {
  name: String
  productivityLevel: PRODUCTIVITY_LEVEL
  color: String
  author: UserUpdateOneRequiredWithoutTagsInput
}

input TagUpdateInput {
  name: String
  productivityLevel: PRODUCTIVITY_LEVEL
  color: String
  author: UserUpdateOneRequiredWithoutTagsInput
}

input TagUpdateManyDataInput {
  name: String
  productivityLevel: PRODUCTIVITY_LEVEL
  color: String
}

input TagUpdateManyInput {
  create: [TagCreateInput!]
  update: [TagUpdateWithWhereUniqueNestedInput!]
  upsert: [TagUpsertWithWhereUniqueNestedInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyMutationInput {
  name: String
  productivityLevel: PRODUCTIVITY_LEVEL
  color: String
}

input TagUpdateManyWithoutAuthorInput {
  create: [TagCreateWithoutAuthorInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithoutAuthorDataInput {
  name: String
  productivityLevel: PRODUCTIVITY_LEVEL
  color: String
}

input TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  data: TagUpdateDataInput!
}

input TagUpdateWithWhereUniqueWithoutAuthorInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutAuthorDataInput!
}

input TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  update: TagUpdateDataInput!
  create: TagCreateInput!
}

input TagUpsertWithWhereUniqueWithoutAuthorInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutAuthorDataInput!
  create: TagCreateWithoutAuthorInput!
}

input TagWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  productivityLevel: PRODUCTIVITY_LEVEL
  productivityLevel_not: PRODUCTIVITY_LEVEL
  productivityLevel_in: [PRODUCTIVITY_LEVEL!]
  productivityLevel_not_in: [PRODUCTIVITY_LEVEL!]
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  author: UserWhereInput
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  mobile_no: String!
  dob: DateTime!
  email: String!
  password: String!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  journal(where: JournalEntryWhereInput, orderBy: JournalEntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JournalEntry!]
  planner(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Entry!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  mobile_no: String!
  dob: DateTime!
  email: String!
  password: String!
  tags: TagCreateManyWithoutAuthorInput
  journal: JournalEntryCreateManyWithoutAuthorInput
  planner: EntryCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutJournalInput {
  create: UserCreateWithoutJournalInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPlannerInput {
  create: UserCreateWithoutPlannerInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTagsInput {
  create: UserCreateWithoutTagsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutJournalInput {
  name: String!
  mobile_no: String!
  dob: DateTime!
  email: String!
  password: String!
  tags: TagCreateManyWithoutAuthorInput
  planner: EntryCreateManyWithoutAuthorInput
}

input UserCreateWithoutPlannerInput {
  name: String!
  mobile_no: String!
  dob: DateTime!
  email: String!
  password: String!
  tags: TagCreateManyWithoutAuthorInput
  journal: JournalEntryCreateManyWithoutAuthorInput
}

input UserCreateWithoutTagsInput {
  name: String!
  mobile_no: String!
  dob: DateTime!
  email: String!
  password: String!
  journal: JournalEntryCreateManyWithoutAuthorInput
  planner: EntryCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  mobile_no_ASC
  mobile_no_DESC
  dob_ASC
  dob_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  mobile_no: String!
  dob: DateTime!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  mobile_no: String
  dob: DateTime
  email: String
  password: String
  tags: TagUpdateManyWithoutAuthorInput
  journal: JournalEntryUpdateManyWithoutAuthorInput
  planner: EntryUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  name: String
  mobile_no: String
  dob: DateTime
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutPlannerInput {
  create: UserCreateWithoutPlannerInput
  update: UserUpdateWithoutPlannerDataInput
  upsert: UserUpsertWithoutPlannerInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutTagsInput {
  create: UserCreateWithoutTagsInput
  update: UserUpdateWithoutTagsDataInput
  upsert: UserUpsertWithoutTagsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPlannerDataInput {
  name: String
  mobile_no: String
  dob: DateTime
  email: String
  password: String
  tags: TagUpdateManyWithoutAuthorInput
  journal: JournalEntryUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutTagsDataInput {
  name: String
  mobile_no: String
  dob: DateTime
  email: String
  password: String
  journal: JournalEntryUpdateManyWithoutAuthorInput
  planner: EntryUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutPlannerInput {
  update: UserUpdateWithoutPlannerDataInput!
  create: UserCreateWithoutPlannerInput!
}

input UserUpsertWithoutTagsInput {
  update: UserUpdateWithoutTagsDataInput!
  create: UserCreateWithoutTagsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  mobile_no: String
  mobile_no_not: String
  mobile_no_in: [String!]
  mobile_no_not_in: [String!]
  mobile_no_lt: String
  mobile_no_lte: String
  mobile_no_gt: String
  mobile_no_gte: String
  mobile_no_contains: String
  mobile_no_not_contains: String
  mobile_no_starts_with: String
  mobile_no_not_starts_with: String
  mobile_no_ends_with: String
  mobile_no_not_ends_with: String
  dob: DateTime
  dob_not: DateTime
  dob_in: [DateTime!]
  dob_not_in: [DateTime!]
  dob_lt: DateTime
  dob_lte: DateTime
  dob_gt: DateTime
  dob_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  journal_every: JournalEntryWhereInput
  journal_some: JournalEntryWhereInput
  journal_none: JournalEntryWhereInput
  planner_every: EntryWhereInput
  planner_some: EntryWhereInput
  planner_none: EntryWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  mobile_no: String
  email: String
}
`