import { z } from "zod";

const LoginDto = z.object({ email: z.string(), password: z.string() });
const LoginResponseDto = z.object({
  access_token: z.string(),
  token_type: z.string().default("Bearer"),
  expires: z.number(),
  refresh_token: z.string().optional(),
});
const SignupDto = z.object({ email: z.string(), password: z.string() });
const EmailDto = z.object({ email: z.string() });
const EmailResetPasswordDto = z.object({
  email: z.string(),
  token: z.string(),
  password: z.string(),
});
const ChangePasswordDto = z.object({
  password: z.string(),
  newPassword: z.string(),
});
const Role = z.literal("admin");
const User = z.object({
  id: z.string(),
  email: z.string(),
  role: Role.optional(),
  verified: z.boolean().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  icon: z.string().optional(),
});
const where = z
  .object({
    id: z.string(),
    email: z.string(),
    role: Role,
    verified: z.boolean(),
    first_name: z.string(),
    last_name: z.string(),
    icon: z.string(),
  })
  .partial()
  .optional();
const UserPaginationResponse = z.object({
  next: z.string().nullable(),
  prev: z.string().nullable(),
  length: z.object({}).partial(),
  items: z.array(User),
});
const UserUpdateDto = z
  .object({ first_name: z.string(), last_name: z.string() })
  .partial();
const UserSetRoleDto = z.object({ user: z.string(), role: z.literal("admin") });
const ChangeEmailDto = z.object({ password: z.string(), email: z.string() });
const FileUploadDto = z.object({ file: z.instanceof(File) });
const UserPreferenceSetDto = z.object({ key: z.string(), value: z.string() });
const UserKeyDataDto = z.object({
  name: z.string(),
  scope: z.array(z.string()),
});
const UserKey = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  scope: z.array(z.string()),
});
const OrganizationStatus = z.union([z.literal(0), z.literal(1)]);
const UserOrganizationCreateDto = z.object({
  name: z.string().max(100),
  description: z.string().max(1000).optional(),
  slug: z.string().min(3).max(32).optional(),
  status: OrganizationStatus.optional(),
});
const Organization = z.object({
  id: z.string(),
  owner: z.string(),
  name: z.string().max(100),
  description: z.string().max(1000).optional(),
  slug: z.string().min(3).max(32).optional(),
  status: OrganizationStatus.optional(),
  icon: z.string().optional(),
  banner: z.string().optional(),
});
const where__2 = z
  .object({
    id: z.string(),
    name: z.string().max(100),
    description: z.string().max(1000),
    slug: z.string().min(3).max(32),
    status: OrganizationStatus,
    icon: z.string(),
    banner: z.string(),
  })
  .partial()
  .optional();
const OrganizationPaginationResponse = z.object({
  next: z.string().nullable(),
  prev: z.string().nullable(),
  length: z.object({}).partial(),
  items: z.array(Organization),
});
const where__3 = z
  .object({
    id: z.string(),
    group: z.string(),
    permissions: z.array(z.string()).max(32),
  })
  .partial()
  .optional();
const OrganizationMember = z.object({
  id: z.string(),
  organization: z.string(),
  user: z.string(),
  group: z.string().optional(),
  permissions: z.array(z.string()).max(32).optional(),
});
const OrganizationMemberPaginationResponse = z.object({
  next: z.string().nullable(),
  prev: z.string().nullable(),
  length: z.object({}).partial(),
  items: z.array(OrganizationMember),
});
const where__4 = z
  .object({
    id: z.string(),
    project: z.string(),
    group: z.string(),
    permissions: z.array(z.string()),
  })
  .partial()
  .optional();
const ProjectMember = z.object({
  id: z.string(),
  project: z.string(),
  user: z.string(),
  group: z.string().optional(),
  permissions: z.array(z.string()).optional(),
});
const ProjectMemberPaginationResponse = z.object({
  next: z.string().nullable(),
  prev: z.string().nullable(),
  length: z.object({}).partial(),
  items: z.array(ProjectMember),
});
const UserProjectInviteAcceptDto = z.object({
  id: z.string(),
  token: z.string(),
});
const where__5 = z
  .object({
    id: z.string(),
    email: z.string(),
    status: z.number(),
    project: z.string(),
    group: z.string(),
    permissions: z.array(z.string()),
  })
  .partial()
  .optional();
const ProjectInvite = z.object({
  id: z.string(),
  email: z.string(),
  status: z.number(),
  user: z.string().optional(),
  project: z.string(),
  group: z.string().optional(),
  permissions: z.array(z.string()).optional(),
});
const ProjectInvitePaginationResponse = z.object({
  next: z.string().nullable(),
  prev: z.string().nullable(),
  length: z.object({}).partial(),
  items: z.array(ProjectInvite),
});
const ProjectStatus = z.union([z.literal(0), z.literal(1)]);
const ProjectType = z.enum(["research", "monitoring", "survey"]);
const where__6 = z
  .object({
    id: z.string(),
    organization: z.string(),
    name: z.string().max(100),
    description: z.string().max(1000),
    slug: z.string().min(3).max(24),
    status: ProjectStatus,
    icon: z.string(),
    type: ProjectType,
  })
  .partial()
  .optional();
const Project = z.object({
  id: z.string(),
  organization: z.string(),
  name: z.string().max(100),
  description: z.string().max(1000).optional(),
  slug: z.string().min(3).max(24).optional(),
  status: ProjectStatus.optional(),
  icon: z.string().optional(),
  type: ProjectType.optional(),
});
const ProjectPaginationResponse = z.object({
  next: z.string().nullable(),
  prev: z.string().nullable(),
  length: z.object({}).partial(),
  items: z.array(Project),
});
const ProjectCreateDto = z.object({
  organization: z.string(),
  name: z.string().max(100),
  description: z.string().max(1000).optional(),
  slug: z.string().min(3).max(24).optional(),
  status: ProjectStatus.optional(),
  type: ProjectType.optional(),
});
const ProjectUpdateDto = z
  .object({
    name: z.string().max(100),
    description: z.string().max(1000),
    slug: z.string().min(3).max(24),
    status: ProjectStatus,
    type: ProjectType,
  })
  .partial();
const SurveyType = z.union([z.literal(0), z.literal(1)]);
const SurveyTheme = z.object({}).partial();
const SurveySources = z.object({}).partial();
const SurveyRequirement = z.object({
  survey: z.string(),
  score: z.object({}).partial().optional(),
});
const ProjectSurveyCreateDto = z.object({
  name: z.string(),
  description: z.string().optional(),
  type: SurveyType,
  theme: SurveyTheme.optional(),
  sources: SurveySources.optional(),
  requirements: z.array(SurveyRequirement).optional(),
  score: z.string().optional(),
});
const ItemLayout = z.object({}).partial();
const ItemSchema = z.lazy(() =>
  z.object({
    id: z.string(),
    type: z.string(),
    name: z.string().optional(),
    text: z.string().optional(),
    items: z.array(ItemSchema).optional(),
    layout: ItemLayout.optional(),
  })
);
const Survey = z.object({
  id: z.string(),
  project: z.string(),
  root: ItemSchema,
  name: z.string(),
  description: z.string().optional(),
  active: z.boolean().optional(),
  type: SurveyType,
  theme: SurveyTheme.optional(),
  sources: SurveySources.optional(),
  fingerprint: z.string(),
  requirements: z.array(SurveyRequirement).optional(),
  score: z.string().optional(),
  icon: z.string().optional(),
});
const where__7 = z
  .object({
    id: z.string(),
    root: ItemSchema,
    name: z.string(),
    description: z.string(),
    active: z.boolean(),
    type: SurveyType,
    theme: SurveyTheme,
    sources: SurveySources,
    fingerprint: z.string(),
    requirements: z.array(SurveyRequirement),
    score: z.string(),
    icon: z.string(),
  })
  .partial()
  .optional();
const SurveyPaginationResponse = z.object({
  next: z.string().nullable(),
  prev: z.string().nullable(),
  length: z.object({}).partial(),
  items: z.array(Survey),
});
const where__8 = z
  .object({
    id: z.string(),
    user: z.string(),
    group: z.string(),
    permissions: z.array(z.string()),
  })
  .partial()
  .optional();
const ProjectProjectGroupCreateDto = z.object({
  name: z.string(),
  permissions: z.array(z.string()).optional(),
  code: z.string().max(16).optional(),
});
const ProjectGroup = z.object({
  id: z.string(),
  project: z.string(),
  name: z.string(),
  permissions: z.array(z.string()).optional(),
  code: z.string().max(16).optional(),
  progressive: z.number().optional(),
});
const where__9 = z
  .object({
    id: z.string(),
    name: z.string(),
    permissions: z.array(z.string()),
    code: z.string().max(16),
    progressive: z.number(),
  })
  .partial()
  .optional();
const ProjectGroupPaginationResponse = z.object({
  next: z.string().nullable(),
  prev: z.string().nullable(),
  length: z.object({}).partial(),
  items: z.array(ProjectGroup),
});
const ProjectInviteDto = z.object({
  email: z.string(),
  user: z.string().optional(),
  group: z.string().optional(),
  permissions: z.array(z.string()).optional(),
});
const where__10 = z
  .object({
    id: z.string(),
    email: z.string(),
    status: z.number(),
    user: z.string(),
    group: z.string(),
    permissions: z.array(z.string()),
  })
  .partial()
  .optional();
const OrganizationCreateDto = z.object({
  owner: z.string(),
  name: z.string().max(100),
  description: z.string().max(1000).optional(),
  slug: z.string().min(3).max(32).optional(),
  status: OrganizationStatus.optional(),
});
const where__11 = z
  .object({
    id: z.string(),
    owner: z.string(),
    name: z.string().max(100),
    description: z.string().max(1000),
    slug: z.string().min(3).max(32),
    status: OrganizationStatus,
    icon: z.string(),
    banner: z.string(),
  })
  .partial()
  .optional();
const OrganizationUpdateDto = z
  .object({
    name: z.string().max(100),
    description: z.string().max(1000),
    slug: z.string().min(3).max(32),
    status: OrganizationStatus,
  })
  .partial();
const OrganizationMemberCreateDto = z.object({
  group: z.string().optional(),
  permissions: z.array(z.string()).max(32).optional(),
  email: z.string(),
});
const where__12 = z
  .object({
    id: z.string(),
    user: z.string(),
    group: z.string(),
    permissions: z.array(z.string()).max(32),
  })
  .partial()
  .optional();
const OrganizationMemberUpdateDto = z
  .object({ group: z.string(), permissions: z.array(z.string()).max(32) })
  .partial();
const OrganizationGroupCreateDto = z.object({
  name: z.string().max(100),
  permissions: z.array(z.string()).max(32).optional(),
});
const OrganizationGroup = z.object({
  id: z.string(),
  organization: z.string(),
  name: z.string().max(100),
  permissions: z.array(z.string()).max(32).optional(),
});
const where__13 = z
  .object({
    id: z.string(),
    name: z.string().max(100),
    permissions: z.array(z.string()).max(32),
  })
  .partial()
  .optional();
const OrganizationGroupPaginationResponse = z.object({
  next: z.string().nullable(),
  prev: z.string().nullable(),
  length: z.object({}).partial(),
  items: z.array(OrganizationGroup),
});
const OrganizationGroupUpdateDto = z
  .object({
    name: z.string().max(100),
    permissions: z.array(z.string()).max(32),
  })
  .partial();
const OrganizationProjectCreateDto = z.object({
  name: z.string().max(100),
  description: z.string().max(1000).optional(),
  slug: z.string().min(3).max(24).optional(),
  status: ProjectStatus.optional(),
  type: ProjectType.optional(),
});
const where__14 = z
  .object({
    id: z.string(),
    name: z.string().max(100),
    description: z.string().max(1000),
    slug: z.string().min(3).max(24),
    status: ProjectStatus,
    icon: z.string(),
    type: ProjectType,
  })
  .partial()
  .optional();
const ScoreStatus = z.union([z.literal(0), z.literal(1), z.literal(2)]);
const ScoreParameterMetric = z.object({
  unit: z.string(),
  text: z.string().optional(),
  min: z.number().optional(),
  max: z.number().optional(),
});
const ScoreParameterValue = z.object({
  value: z.number(),
  text: z.string().optional(),
});
const ScoreParameterInfo = z.object({
  name: z.string(),
  description: z.string().optional(),
  optional: z.boolean().optional(),
  metric: z.array(ScoreParameterMetric).optional(),
  values: z.array(ScoreParameterValue).optional(),
});
const ScoreUsage = z.object({
  instructions: z.string(),
  when: z.string().optional(),
  why: z.string().optional(),
  evidence: z.string().optional(),
});
const ScoreOutput = z.object({
  from: z.number(),
  to: z.number(),
  result: z.string(),
  content: z.string().optional(),
  severity: z.number().optional(),
});
const ScoreStatement = z.object({ description: z.string() });
const OrganizationScoreCreateDto = z.object({
  name: z.string().max(100),
  description: z.string().max(1000).optional(),
  status: ScoreStatus.optional(),
  text: z.string().max(1000),
  params: z.array(ScoreParameterInfo),
  version: z.string().max(100).optional(),
  category: z.string().max(100).optional(),
  usage: ScoreUsage,
  outputs: z.array(ScoreOutput),
  unit: z.string().max(100),
  statements: z.array(ScoreStatement).optional(),
});
const Score = z.object({
  id: z.string(),
  organization: z.string(),
  name: z.string().max(100),
  description: z.string().max(1000).optional(),
  status: ScoreStatus.optional(),
  text: z.string().max(1000),
  params: z.array(ScoreParameterInfo),
  version: z.string().max(100).optional(),
  category: z.string().max(100).optional(),
  usage: ScoreUsage,
  outputs: z.array(ScoreOutput),
  unit: z.string().max(100),
  statements: z.array(ScoreStatement).optional(),
});
const where__15 = z
  .object({
    id: z.string(),
    name: z.string().max(100),
    description: z.string().max(1000),
    status: ScoreStatus,
    text: z.string().max(1000),
    params: z.array(ScoreParameterInfo),
    version: z.string().max(100),
    category: z.string().max(100),
    usage: ScoreUsage,
    outputs: z.array(ScoreOutput),
    unit: z.string().max(100),
    statements: z.array(ScoreStatement),
  })
  .partial()
  .optional();
const ScorePaginationResponse = z.object({
  next: z.string().nullable(),
  prev: z.string().nullable(),
  length: z.object({}).partial(),
  items: z.array(Score),
});
const ProjectMemberCreateDto = z.object({
  project: z.string(),
  user: z.string(),
  group: z.string().optional(),
  permissions: z.array(z.string()).optional(),
});
const where__16 = z
  .object({
    id: z.string(),
    project: z.string(),
    user: z.string(),
    group: z.string(),
    permissions: z.array(z.string()),
  })
  .partial()
  .optional();
const ProjectMemberUpdateDto = z
  .object({ group: z.string(), permissions: z.array(z.string()) })
  .partial();
const AnswersMap = z.object({}).partial();
const where__17 = z
  .object({
    id: z.string(),
    survey: z.string(),
    answers: AnswersMap,
    pseudoId: z.string(),
    doctor: z.string(),
    patient: z.string(),
    submitted: z.boolean(),
    compilation_time: z.number(),
    score: z.number(),
  })
  .partial()
  .optional();
const Submission = z.object({
  id: z.string(),
  project: z.string(),
  survey: z.string(),
  answers: AnswersMap,
  pseudoId: z.string().optional(),
  doctor: z.string().optional(),
  patient: z.string().optional(),
  submitted: z.boolean().optional(),
  compilation_time: z.number().optional(),
  score: z.number().optional(),
});
const SubmissionPaginationResponse = z.object({
  next: z.string().nullable(),
  prev: z.string().nullable(),
  length: z.object({}).partial(),
  items: z.array(Submission),
});
const ProjectGroupCreateDto = z.object({
  project: z.string(),
  name: z.string(),
  permissions: z.array(z.string()).optional(),
  code: z.string().max(16).optional(),
});
const where__18 = z
  .object({
    id: z.string(),
    project: z.string(),
    name: z.string(),
    permissions: z.array(z.string()),
    code: z.string().max(16),
    progressive: z.number(),
  })
  .partial()
  .optional();
const ProjectGroupUpdateDto = z
  .object({ name: z.string(), permissions: z.array(z.string()) })
  .partial();
const where__19 = z
  .object({
    id: z.string(),
    user: z.string(),
    permissions: z.array(z.string()),
  })
  .partial()
  .optional();
const ProjectInviteCreateDto = z.object({
  email: z.string(),
  user: z.string().optional(),
  project: z.string(),
  group: z.string().optional(),
  permissions: z.array(z.string()).optional(),
});
const where__20 = z
  .object({
    id: z.string(),
    email: z.string(),
    status: z.number(),
    user: z.string(),
    project: z.string(),
    group: z.string(),
    permissions: z.array(z.string()),
  })
  .partial()
  .optional();
const ProjectInviteUpdateDto = z
  .object({
    user: z.string(),
    group: z.string(),
    permissions: z.array(z.string()),
  })
  .partial();
const ProjectInviteRegisterDto = z.object({
  id: z.string(),
  token: z.string(),
  password: z.string(),
});
const SurveyCreateDto = z.object({
  project: z.string(),
  name: z.string(),
  description: z.string().optional(),
  type: SurveyType,
  theme: SurveyTheme.optional(),
  sources: SurveySources.optional(),
  requirements: z.array(SurveyRequirement).optional(),
  score: z.string().optional(),
});
const where__21 = z
  .object({
    id: z.string(),
    project: z.string(),
    root: ItemSchema,
    name: z.string(),
    description: z.string(),
    active: z.boolean(),
    type: SurveyType,
    theme: SurveyTheme,
    sources: SurveySources,
    fingerprint: z.string(),
    requirements: z.array(SurveyRequirement),
    score: z.string(),
    icon: z.string(),
  })
  .partial()
  .optional();
const Source = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  key: z.string().optional(),
  view: z.number().optional(),
  fields: z.object({}).partial().optional(),
});
const SurveyUpdateDto = z
  .object({
    name: z.string(),
    description: z.string(),
    type: SurveyType,
    theme: SurveyTheme,
    sources: SurveySources,
    requirements: z.array(SurveyRequirement),
    score: z.string(),
  })
  .partial();
const OperationType = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(4),
  z.literal(6),
  z.literal(7),
]);
const OperationDataDto = z.object({
  type: z.string(),
  name: z.string().optional(),
  text: z.string().optional(),
  items: z.array(ItemSchema).optional(),
  layout: ItemLayout.optional(),
});
const OperationDto = z.object({
  type: OperationType,
  id: z.string(),
  data: OperationDataDto.optional(),
  index: z.number().optional(),
  parent: z.string().optional(),
});
const SurveyOperationDataDto = z.object({
  operation: z.array(OperationDto),
  fingerprint: z.string(),
});
const SurveyReplaceRootDataDto = z.object({
  root: ItemSchema,
  fingerprint: z.string(),
});
const SurveySubmissionCreateDto = z
  .object({ pseudoId: z.string(), doctor: z.string(), patient: z.string() })
  .partial();
const where__22 = z
  .object({
    id: z.string(),
    project: z.string(),
    answers: AnswersMap,
    pseudoId: z.string(),
    doctor: z.string(),
    patient: z.string(),
    submitted: z.boolean(),
    compilation_time: z.number(),
    score: z.number(),
  })
  .partial()
  .optional();
const DBAnswerDto = z.object({
  id: z.string(),
  answer: z.object({}).partial(),
});
const SurveyPublicSubmissionCreateDto = z.object({
  compilation_time: z.number().optional(),
  answers: z.array(DBAnswerDto),
  pseudoId: z.string().optional(),
});
const SubmissionCreateDto = z.object({
  survey: z.string(),
  pseudoId: z.string().optional(),
  doctor: z.string().optional(),
  patient: z.string().optional(),
});
const where__23 = z
  .object({
    id: z.string(),
    project: z.string(),
    survey: z.string(),
    answers: AnswersMap,
    pseudoId: z.string(),
    doctor: z.string(),
    patient: z.string(),
    submitted: z.boolean(),
    compilation_time: z.number(),
    score: z.number(),
  })
  .partial()
  .optional();
const SubmissionUpdateDto = z
  .object({ pseudoId: z.string(), doctor: z.string(), patient: z.string() })
  .partial();
const SubmissionAnswerDto = z.object({
  id: z.string(),
  answer: z.object({}).partial(),
  compilation_time: z.number().optional(),
});
const SubmissionFlowResponseDto = z
  .object({ next: z.object({}).partial() })
  .partial();
const SubmissionAnswersDto = z.object({
  compilation_time: z.number().optional(),
  answers: z.array(DBAnswerDto),
});
const where__24 = z
  .object({
    id: z.string(),
    organization: z.string(),
    name: z.string().max(100),
    description: z.string().max(1000),
    status: ScoreStatus,
    text: z.string().max(1000),
    params: z.array(ScoreParameterInfo),
    version: z.string().max(100),
    category: z.string().max(100),
    usage: ScoreUsage,
    outputs: z.array(ScoreOutput),
    unit: z.string().max(100),
    statements: z.array(ScoreStatement),
  })
  .partial()
  .optional();
const Object = z.object({}).partial();
const ScoreCreateDto = z.object({
  organization: z.string(),
  name: z.string().max(100),
  description: z.string().max(1000).optional(),
  status: ScoreStatus.optional(),
  text: z.string().max(1000),
  params: z.array(ScoreParameterInfo),
  version: z.string().max(100).optional(),
  category: z.string().max(100).optional(),
  usage: ScoreUsage,
  outputs: z.array(ScoreOutput),
  unit: z.string().max(100),
  statements: z.array(ScoreStatement).optional(),
});
const ScoreUpdateDto = z
  .object({
    name: z.string().max(100),
    description: z.string().max(1000),
    status: ScoreStatus,
    text: z.string().max(1000),
    params: z.array(ScoreParameterInfo),
    version: z.string().max(100),
    category: z.string().max(100),
    usage: ScoreUsage,
    outputs: z.array(ScoreOutput),
    unit: z.string().max(100),
    statements: z.array(ScoreStatement),
  })
  .partial();
const TestCreateDto = z.object({
  name: z.string(),
  value: z.number(),
  answers: z.object({}).partial().optional(),
});
const TestModel = z.object({
  id: z.string(),
  name: z.string(),
  value: z.number(),
  answers: z.object({}).partial().optional(),
});
const where__25 = z
  .object({
    id: z.string(),
    name: z.string(),
    value: z.number(),
    answers: z.object({}).partial(),
  })
  .partial()
  .optional();
const TestPaginationResponse = z.object({
  next: z.string().nullable(),
  prev: z.string().nullable(),
  length: z.object({}).partial(),
  items: z.array(TestModel),
});
const TestUpdateDto = z
  .object({
    name: z.string(),
    value: z.number(),
    answers: z.object({}).partial(),
  })
  .partial();
const EventType = z.union([z.literal(1), z.literal(2), z.literal(4)]);
const TestModelEvent = z.object({
  user: z.string(),
  action: z.string(),
  id: z.string(),
  target: z.string(),
  type: EventType,
  data: z.object({}).partial(),
});

export {
  LoginDto as LoginDtoSchema,
  LoginResponseDto as LoginResponseDtoSchema,
  SignupDto as SignupDtoSchema,
  EmailDto as EmailDtoSchema,
  EmailResetPasswordDto as EmailResetPasswordDtoSchema,
  ChangePasswordDto as ChangePasswordDtoSchema,
  Role as RoleSchema,
  User as UserSchema,
  where as whereSchema,
  UserPaginationResponse as UserPaginationResponseSchema,
  UserUpdateDto as UserUpdateDtoSchema,
  UserSetRoleDto as UserSetRoleDtoSchema,
  ChangeEmailDto as ChangeEmailDtoSchema,
  FileUploadDto as FileUploadDtoSchema,
  UserPreferenceSetDto as UserPreferenceSetDtoSchema,
  UserKeyDataDto as UserKeyDataDtoSchema,
  UserKey as UserKeySchema,
  OrganizationStatus as OrganizationStatusSchema,
  UserOrganizationCreateDto as UserOrganizationCreateDtoSchema,
  Organization as OrganizationSchema,
  where__2 as where__2Schema,
  OrganizationPaginationResponse as OrganizationPaginationResponseSchema,
  where__3 as where__3Schema,
  OrganizationMember as OrganizationMemberSchema,
  OrganizationMemberPaginationResponse as OrganizationMemberPaginationResponseSchema,
  where__4 as where__4Schema,
  ProjectMember as ProjectMemberSchema,
  ProjectMemberPaginationResponse as ProjectMemberPaginationResponseSchema,
  UserProjectInviteAcceptDto as UserProjectInviteAcceptDtoSchema,
  where__5 as where__5Schema,
  ProjectInvite as ProjectInviteSchema,
  ProjectInvitePaginationResponse as ProjectInvitePaginationResponseSchema,
  ProjectStatus as ProjectStatusSchema,
  ProjectType as ProjectTypeSchema,
  where__6 as where__6Schema,
  Project as ProjectSchema,
  ProjectPaginationResponse as ProjectPaginationResponseSchema,
  ProjectCreateDto as ProjectCreateDtoSchema,
  ProjectUpdateDto as ProjectUpdateDtoSchema,
  SurveyType as SurveyTypeSchema,
  SurveyTheme as SurveyThemeSchema,
  SurveySources as SurveySourcesSchema,
  SurveyRequirement as SurveyRequirementSchema,
  ProjectSurveyCreateDto as ProjectSurveyCreateDtoSchema,
  ItemLayout as ItemLayoutSchema,
  ItemSchema as ItemSchemaSchema,
  Survey as SurveySchema,
  where__7 as where__7Schema,
  SurveyPaginationResponse as SurveyPaginationResponseSchema,
  where__8 as where__8Schema,
  ProjectProjectGroupCreateDto as ProjectProjectGroupCreateDtoSchema,
  ProjectGroup as ProjectGroupSchema,
  where__9 as where__9Schema,
  ProjectGroupPaginationResponse as ProjectGroupPaginationResponseSchema,
  ProjectInviteDto as ProjectInviteDtoSchema,
  where__10 as where__10Schema,
  OrganizationCreateDto as OrganizationCreateDtoSchema,
  where__11 as where__11Schema,
  OrganizationUpdateDto as OrganizationUpdateDtoSchema,
  OrganizationMemberCreateDto as OrganizationMemberCreateDtoSchema,
  where__12 as where__12Schema,
  OrganizationMemberUpdateDto as OrganizationMemberUpdateDtoSchema,
  OrganizationGroupCreateDto as OrganizationGroupCreateDtoSchema,
  OrganizationGroup as OrganizationGroupSchema,
  where__13 as where__13Schema,
  OrganizationGroupPaginationResponse as OrganizationGroupPaginationResponseSchema,
  OrganizationGroupUpdateDto as OrganizationGroupUpdateDtoSchema,
  OrganizationProjectCreateDto as OrganizationProjectCreateDtoSchema,
  where__14 as where__14Schema,
  ScoreStatus as ScoreStatusSchema,
  ScoreParameterMetric as ScoreParameterMetricSchema,
  ScoreParameterValue as ScoreParameterValueSchema,
  ScoreParameterInfo as ScoreParameterInfoSchema,
  ScoreUsage as ScoreUsageSchema,
  ScoreOutput as ScoreOutputSchema,
  ScoreStatement as ScoreStatementSchema,
  OrganizationScoreCreateDto as OrganizationScoreCreateDtoSchema,
  Score as ScoreSchema,
  where__15 as where__15Schema,
  ScorePaginationResponse as ScorePaginationResponseSchema,
  ProjectMemberCreateDto as ProjectMemberCreateDtoSchema,
  where__16 as where__16Schema,
  ProjectMemberUpdateDto as ProjectMemberUpdateDtoSchema,
  AnswersMap as AnswersMapSchema,
  where__17 as where__17Schema,
  Submission as SubmissionSchema,
  SubmissionPaginationResponse as SubmissionPaginationResponseSchema,
  ProjectGroupCreateDto as ProjectGroupCreateDtoSchema,
  where__18 as where__18Schema,
  ProjectGroupUpdateDto as ProjectGroupUpdateDtoSchema,
  where__19 as where__19Schema,
  ProjectInviteCreateDto as ProjectInviteCreateDtoSchema,
  where__20 as where__20Schema,
  ProjectInviteUpdateDto as ProjectInviteUpdateDtoSchema,
  ProjectInviteRegisterDto as ProjectInviteRegisterDtoSchema,
  SurveyCreateDto as SurveyCreateDtoSchema,
  where__21 as where__21Schema,
  Source as SourceSchema,
  SurveyUpdateDto as SurveyUpdateDtoSchema,
  OperationType as OperationTypeSchema,
  OperationDataDto as OperationDataDtoSchema,
  OperationDto as OperationDtoSchema,
  SurveyOperationDataDto as SurveyOperationDataDtoSchema,
  SurveyReplaceRootDataDto as SurveyReplaceRootDataDtoSchema,
  SurveySubmissionCreateDto as SurveySubmissionCreateDtoSchema,
  where__22 as where__22Schema,
  DBAnswerDto as DBAnswerDtoSchema,
  SurveyPublicSubmissionCreateDto as SurveyPublicSubmissionCreateDtoSchema,
  SubmissionCreateDto as SubmissionCreateDtoSchema,
  where__23 as where__23Schema,
  SubmissionUpdateDto as SubmissionUpdateDtoSchema,
  SubmissionAnswerDto as SubmissionAnswerDtoSchema,
  SubmissionFlowResponseDto as SubmissionFlowResponseDtoSchema,
  SubmissionAnswersDto as SubmissionAnswersDtoSchema,
  where__24 as where__24Schema,
  Object as ObjectSchema,
  ScoreCreateDto as ScoreCreateDtoSchema,
  ScoreUpdateDto as ScoreUpdateDtoSchema,
  TestCreateDto as TestCreateDtoSchema,
  TestModel as TestModelSchema,
  where__25 as where__25Schema,
  TestPaginationResponse as TestPaginationResponseSchema,
  TestUpdateDto as TestUpdateDtoSchema,
  EventType as EventTypeSchema,
  TestModelEvent as TestModelEventSchema,
};
