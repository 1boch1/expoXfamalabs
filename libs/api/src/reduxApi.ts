import { baseApi as api } from "./baseApi";

export const addTagTypes = [
  "Auth",
  "Users",
  "Projects",
  "Organizations",
  "ProjectMembers",
  "ProjectGroups",
  "ProjectInvites",
  "Surveys",
  "Submissions",
  "Scores",
  "Tests",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      authControllerLogin: build.mutation<
        AuthControllerLoginApiResponse,
        AuthControllerLoginApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/login`,
          method: "POST",
          body: queryArg.loginDto,
        }),
        invalidatesTags: ["Auth"],
      }),
      authControllerSignup: build.mutation<
        AuthControllerSignupApiResponse,
        AuthControllerSignupApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/signup`,
          method: "POST",
          body: queryArg.signupDto,
        }),
        invalidatesTags: ["Auth"],
      }),
      authControllerRefresh: build.mutation<
        AuthControllerRefreshApiResponse,
        AuthControllerRefreshApiArg
      >({
        query: () => ({ url: `/auth/refresh`, method: "POST" }),
        invalidatesTags: ["Auth"],
      }),
      authControllerLogout: build.mutation<
        AuthControllerLogoutApiResponse,
        AuthControllerLogoutApiArg
      >({
        query: () => ({ url: `/auth/logout`, method: "POST" }),
        invalidatesTags: ["Auth"],
      }),
      authControllerSendForgotPasswordEmail: build.mutation<
        AuthControllerSendForgotPasswordEmailApiResponse,
        AuthControllerSendForgotPasswordEmailApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/forgot-password`,
          method: "POST",
          body: queryArg.emailDto,
        }),
        invalidatesTags: ["Auth"],
      }),
      authControllerHandleForgotPassword: build.mutation<
        AuthControllerHandleForgotPasswordApiResponse,
        AuthControllerHandleForgotPasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/reset-password`,
          method: "POST",
          body: queryArg.emailResetPasswordDto,
        }),
        invalidatesTags: ["Auth"],
      }),
      authControllerSendVerificationEmail: build.mutation<
        AuthControllerSendVerificationEmailApiResponse,
        AuthControllerSendVerificationEmailApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/verification`,
          method: "POST",
          body: queryArg.emailDto,
        }),
        invalidatesTags: ["Auth"],
      }),
      authControllerHandleVerificationEmail: build.query<
        AuthControllerHandleVerificationEmailApiResponse,
        AuthControllerHandleVerificationEmailApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/verify`,
          params: {
            email: queryArg.email,
            token: queryArg.token,
            redirect_url: queryArg.redirectUrl,
          },
        }),
        providesTags: ["Auth"],
      }),
      userControllerChangePassword: build.mutation<
        UserControllerChangePasswordApiResponse,
        UserControllerChangePasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/users/change-password`,
          method: "POST",
          body: queryArg.changePasswordDto,
        }),
        invalidatesTags: ["Users"],
      }),
      userControllerMe: build.query<
        UserControllerMeApiResponse,
        UserControllerMeApiArg
      >({
        query: () => ({ url: `/users/me` }),
        providesTags: ["Users"],
      }),
      userControllerList: build.query<
        UserControllerListApiResponse,
        UserControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/users`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Users"],
      }),
      userControllerCount: build.query<
        UserControllerCountApiResponse,
        UserControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/users/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Users"],
      }),
      userControllerFindById: build.query<
        UserControllerFindByIdApiResponse,
        UserControllerFindByIdApiArg
      >({
        query: (queryArg) => ({ url: `/users/${queryArg.user}` }),
        providesTags: ["Users"],
      }),
      userControllerUpdateById: build.mutation<
        UserControllerUpdateByIdApiResponse,
        UserControllerUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}`,
          method: "PATCH",
          body: queryArg.userUpdateDto,
        }),
        invalidatesTags: ["Users"],
      }),
      userControllerDeleteById: build.mutation<
        UserControllerDeleteByIdApiResponse,
        UserControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Users"],
      }),
      userControllerSetRole: build.mutation<
        UserControllerSetRoleApiResponse,
        UserControllerSetRoleApiArg
      >({
        query: (queryArg) => ({
          url: `/users/role`,
          method: "POST",
          body: queryArg.userSetRoleDto,
        }),
        invalidatesTags: ["Users"],
      }),
      userControllerChangeEmail: build.mutation<
        UserControllerChangeEmailApiResponse,
        UserControllerChangeEmailApiArg
      >({
        query: (queryArg) => ({
          url: `/users/change-email`,
          method: "POST",
          body: queryArg.changeEmailDto,
        }),
        invalidatesTags: ["Users"],
      }),
      userControllerUploadIcon: build.mutation<
        UserControllerUploadIconApiResponse,
        UserControllerUploadIconApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/icon`,
          method: "POST",
          body: queryArg.fileUploadDto,
        }),
        invalidatesTags: ["Users"],
      }),
      userControllerDownloadIcon: build.query<
        UserControllerDownloadIconApiResponse,
        UserControllerDownloadIconApiArg
      >({
        query: (queryArg) => ({ url: `/users/${queryArg.user}/icon` }),
        providesTags: ["Users"],
      }),
      userControllerDeleteIcon: build.mutation<
        UserControllerDeleteIconApiResponse,
        UserControllerDeleteIconApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/icon`,
          method: "DELETE",
        }),
        invalidatesTags: ["Users"],
      }),
      userPreferencesControllerSet: build.mutation<
        UserPreferencesControllerSetApiResponse,
        UserPreferencesControllerSetApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/preferences`,
          method: "POST",
          body: queryArg.userPreferenceSetDto,
        }),
        invalidatesTags: ["Users"],
      }),
      userPreferencesControllerGet: build.query<
        UserPreferencesControllerGetApiResponse,
        UserPreferencesControllerGetApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/preferences`,
          params: {
            key: queryArg.key,
          },
        }),
        providesTags: ["Users"],
      }),
      userPreferencesControllerUnset: build.mutation<
        UserPreferencesControllerUnsetApiResponse,
        UserPreferencesControllerUnsetApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/preferences`,
          method: "DELETE",
          params: {
            key: queryArg.key,
          },
        }),
        invalidatesTags: ["Users"],
      }),
      userKeyControllerCreate: build.mutation<
        UserKeyControllerCreateApiResponse,
        UserKeyControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/keys`,
          method: "POST",
          body: queryArg.userKeyDataDto,
        }),
        invalidatesTags: ["Users"],
      }),
      userKeyControllerFind: build.query<
        UserKeyControllerFindApiResponse,
        UserKeyControllerFindApiArg
      >({
        query: (queryArg) => ({ url: `/users/${queryArg.user}/keys` }),
        providesTags: ["Users"],
      }),
      userKeyControllerDeleteById: build.mutation<
        UserKeyControllerDeleteByIdApiResponse,
        UserKeyControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/keys/${queryArg.key}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Users"],
      }),
      userOrganizationControllerCreate: build.mutation<
        UserOrganizationControllerCreateApiResponse,
        UserOrganizationControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/organizations`,
          method: "POST",
          body: queryArg.userOrganizationCreateDto,
        }),
        invalidatesTags: ["Users"],
      }),
      userOrganizationControllerList: build.query<
        UserOrganizationControllerListApiResponse,
        UserOrganizationControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/organizations`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Users"],
      }),
      userOrganizationMemberControllerList: build.query<
        UserOrganizationMemberControllerListApiResponse,
        UserOrganizationMemberControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/organizations-member`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Users"],
      }),
      userOrganizationMemberControllerCount: build.query<
        UserOrganizationMemberControllerCountApiResponse,
        UserOrganizationMemberControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/organizations-member/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Users"],
      }),
      userProjectMemberControllerList: build.query<
        UserProjectMemberControllerListApiResponse,
        UserProjectMemberControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/projects-member`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Users"],
      }),
      userProjectMemberControllerCount: build.query<
        UserProjectMemberControllerCountApiResponse,
        UserProjectMemberControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/projects-member/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Users"],
      }),
      userProjectInviteControllerAccept: build.mutation<
        UserProjectInviteControllerAcceptApiResponse,
        UserProjectInviteControllerAcceptApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/projects-invite/accept`,
          method: "POST",
          body: queryArg.userProjectInviteAcceptDto,
        }),
        invalidatesTags: ["Users"],
      }),
      userProjectInviteControllerList: build.query<
        UserProjectInviteControllerListApiResponse,
        UserProjectInviteControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/projects-invite`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Users"],
      }),
      userProjectInviteControllerCount: build.query<
        UserProjectInviteControllerCountApiResponse,
        UserProjectInviteControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/users/${queryArg.user}/projects-invite/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Users"],
      }),
      projectPublicControllerList: build.query<
        ProjectPublicControllerListApiResponse,
        ProjectPublicControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/public`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Projects"],
      }),
      projectPublicControllerCount: build.query<
        ProjectPublicControllerCountApiResponse,
        ProjectPublicControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/public/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Projects"],
      }),
      projectPublicControllerFindById: build.query<
        ProjectPublicControllerFindByIdApiResponse,
        ProjectPublicControllerFindByIdApiArg
      >({
        query: (queryArg) => ({ url: `/projects/public/${queryArg.project}` }),
        providesTags: ["Projects"],
      }),
      projectPublicControllerGetOrganization: build.query<
        ProjectPublicControllerGetOrganizationApiResponse,
        ProjectPublicControllerGetOrganizationApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/public/${queryArg.project}/organization`,
        }),
        providesTags: ["Projects"],
      }),
      projectControllerCreate: build.mutation<
        ProjectControllerCreateApiResponse,
        ProjectControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/projects`,
          method: "POST",
          body: queryArg.projectCreateDto,
        }),
        invalidatesTags: ["Projects"],
      }),
      projectControllerList: build.query<
        ProjectControllerListApiResponse,
        ProjectControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/projects`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Projects"],
      }),
      projectControllerCount: build.query<
        ProjectControllerCountApiResponse,
        ProjectControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Projects"],
      }),
      projectControllerFindById: build.query<
        ProjectControllerFindByIdApiResponse,
        ProjectControllerFindByIdApiArg
      >({
        query: (queryArg) => ({ url: `/projects/${queryArg.project}` }),
        providesTags: ["Projects"],
      }),
      projectControllerUpdateById: build.mutation<
        ProjectControllerUpdateByIdApiResponse,
        ProjectControllerUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}`,
          method: "PATCH",
          body: queryArg.projectUpdateDto,
        }),
        invalidatesTags: ["Projects"],
      }),
      projectControllerDeleteById: build.mutation<
        ProjectControllerDeleteByIdApiResponse,
        ProjectControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Projects"],
      }),
      projectControllerGetOrganization: build.query<
        ProjectControllerGetOrganizationApiResponse,
        ProjectControllerGetOrganizationApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/organization`,
        }),
        providesTags: ["Projects"],
      }),
      projectControllerUploadIcon: build.mutation<
        ProjectControllerUploadIconApiResponse,
        ProjectControllerUploadIconApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/icon`,
          method: "POST",
          body: queryArg.fileUploadDto,
        }),
        invalidatesTags: ["Projects"],
      }),
      projectControllerDownloadIcon: build.query<
        ProjectControllerDownloadIconApiResponse,
        ProjectControllerDownloadIconApiArg
      >({
        query: (queryArg) => ({ url: `/projects/${queryArg.project}/icon` }),
        providesTags: ["Projects"],
      }),
      projectSurveyControllerCreate: build.mutation<
        ProjectSurveyControllerCreateApiResponse,
        ProjectSurveyControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/surveys`,
          method: "POST",
          body: queryArg.projectSurveyCreateDto,
        }),
        invalidatesTags: ["Projects"],
      }),
      projectSurveyControllerList: build.query<
        ProjectSurveyControllerListApiResponse,
        ProjectSurveyControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/surveys`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Projects"],
      }),
      projectSurveyControllerCount: build.query<
        ProjectSurveyControllerCountApiResponse,
        ProjectSurveyControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/surveys/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Projects"],
      }),
      projectProjectMemberControllerList: build.query<
        ProjectProjectMemberControllerListApiResponse,
        ProjectProjectMemberControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/members`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Projects"],
      }),
      projectProjectMemberControllerCount: build.query<
        ProjectProjectMemberControllerCountApiResponse,
        ProjectProjectMemberControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/members/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Projects"],
      }),
      projectProjectMemberControllerExists: build.query<
        ProjectProjectMemberControllerExistsApiResponse,
        ProjectProjectMemberControllerExistsApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/members/${queryArg.user}`,
        }),
        providesTags: ["Projects"],
      }),
      projectProjectGroupControllerCreate: build.mutation<
        ProjectProjectGroupControllerCreateApiResponse,
        ProjectProjectGroupControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/groups`,
          method: "POST",
          body: queryArg.projectProjectGroupCreateDto,
        }),
        invalidatesTags: ["Projects"],
      }),
      projectProjectGroupControllerList: build.query<
        ProjectProjectGroupControllerListApiResponse,
        ProjectProjectGroupControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/groups`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Projects"],
      }),
      projectProjectGroupControllerCount: build.query<
        ProjectProjectGroupControllerCountApiResponse,
        ProjectProjectGroupControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/groups/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Projects"],
      }),
      projectProjectInviteControllerInvite: build.mutation<
        ProjectProjectInviteControllerInviteApiResponse,
        ProjectProjectInviteControllerInviteApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/invites`,
          method: "POST",
          body: queryArg.projectInviteDto,
        }),
        invalidatesTags: ["Projects"],
      }),
      projectProjectInviteControllerList: build.query<
        ProjectProjectInviteControllerListApiResponse,
        ProjectProjectInviteControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/invites`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Projects"],
      }),
      projectProjectInviteControllerCount: build.query<
        ProjectProjectInviteControllerCountApiResponse,
        ProjectProjectInviteControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/projects/${queryArg.project}/invites/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Projects"],
      }),
      organizationControllerCreate: build.mutation<
        OrganizationControllerCreateApiResponse,
        OrganizationControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations`,
          method: "POST",
          body: queryArg.organizationCreateDto,
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationControllerList: build.query<
        OrganizationControllerListApiResponse,
        OrganizationControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Organizations"],
      }),
      organizationControllerCount: build.query<
        OrganizationControllerCountApiResponse,
        OrganizationControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Organizations"],
      }),
      organizationControllerExists: build.query<
        OrganizationControllerExistsApiResponse,
        OrganizationControllerExistsApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/exists`,
          params: {
            organization: queryArg.organization,
          },
        }),
        providesTags: ["Organizations"],
      }),
      organizationControllerFindById: build.query<
        OrganizationControllerFindByIdApiResponse,
        OrganizationControllerFindByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}`,
        }),
        providesTags: ["Organizations"],
      }),
      organizationControllerUpdateById: build.mutation<
        OrganizationControllerUpdateByIdApiResponse,
        OrganizationControllerUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}`,
          method: "PATCH",
          body: queryArg.organizationUpdateDto,
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationControllerDeleteById: build.mutation<
        OrganizationControllerDeleteByIdApiResponse,
        OrganizationControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationControllerUploadIcon: build.mutation<
        OrganizationControllerUploadIconApiResponse,
        OrganizationControllerUploadIconApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/icon`,
          method: "POST",
          body: queryArg.fileUploadDto,
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationControllerDownloadIcon: build.query<
        OrganizationControllerDownloadIconApiResponse,
        OrganizationControllerDownloadIconApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/icon`,
        }),
        providesTags: ["Organizations"],
      }),
      organizationControllerUploadBanner: build.mutation<
        OrganizationControllerUploadBannerApiResponse,
        OrganizationControllerUploadBannerApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/banner`,
          method: "POST",
          body: queryArg.fileUploadDto,
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationControllerDownloadBanner: build.query<
        OrganizationControllerDownloadBannerApiResponse,
        OrganizationControllerDownloadBannerApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/banner`,
        }),
        providesTags: ["Organizations"],
      }),
      organizationMemberControllerCreate: build.mutation<
        OrganizationMemberControllerCreateApiResponse,
        OrganizationMemberControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/members`,
          method: "POST",
          body: queryArg.organizationMemberCreateDto,
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationMemberControllerList: build.query<
        OrganizationMemberControllerListApiResponse,
        OrganizationMemberControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/members`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Organizations"],
      }),
      organizationMemberControllerCount: build.query<
        OrganizationMemberControllerCountApiResponse,
        OrganizationMemberControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/members/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Organizations"],
      }),
      organizationMemberControllerFindById: build.query<
        OrganizationMemberControllerFindByIdApiResponse,
        OrganizationMemberControllerFindByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/members/${queryArg.member}`,
        }),
        providesTags: ["Organizations"],
      }),
      organizationMemberControllerUpdateById: build.mutation<
        OrganizationMemberControllerUpdateByIdApiResponse,
        OrganizationMemberControllerUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/members/${queryArg.member}`,
          method: "PATCH",
          body: queryArg.organizationMemberUpdateDto,
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationMemberControllerDeleteById: build.mutation<
        OrganizationMemberControllerDeleteByIdApiResponse,
        OrganizationMemberControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/members/${queryArg.member}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationGroupControllerCreate: build.mutation<
        OrganizationGroupControllerCreateApiResponse,
        OrganizationGroupControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/groups`,
          method: "POST",
          body: queryArg.organizationGroupCreateDto,
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationGroupControllerList: build.query<
        OrganizationGroupControllerListApiResponse,
        OrganizationGroupControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/groups`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Organizations"],
      }),
      organizationGroupControllerCount: build.query<
        OrganizationGroupControllerCountApiResponse,
        OrganizationGroupControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/groups/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Organizations"],
      }),
      organizationGroupControllerFindById: build.query<
        OrganizationGroupControllerFindByIdApiResponse,
        OrganizationGroupControllerFindByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/groups/${queryArg.group}`,
        }),
        providesTags: ["Organizations"],
      }),
      organizationGroupControllerUpdateById: build.mutation<
        OrganizationGroupControllerUpdateByIdApiResponse,
        OrganizationGroupControllerUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/groups/${queryArg.group}`,
          method: "PATCH",
          body: queryArg.organizationGroupUpdateDto,
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationGroupControllerDeleteById: build.mutation<
        OrganizationGroupControllerDeleteByIdApiResponse,
        OrganizationGroupControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/groups/${queryArg.group}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationProjectControllerCreate: build.mutation<
        OrganizationProjectControllerCreateApiResponse,
        OrganizationProjectControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/projects`,
          method: "POST",
          body: queryArg.organizationProjectCreateDto,
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationProjectControllerList: build.query<
        OrganizationProjectControllerListApiResponse,
        OrganizationProjectControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/projects`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Organizations"],
      }),
      organizationProjectControllerCount: build.query<
        OrganizationProjectControllerCountApiResponse,
        OrganizationProjectControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/projects/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Organizations"],
      }),
      organizationProjectControllerFindByKey: build.query<
        OrganizationProjectControllerFindByKeyApiResponse,
        OrganizationProjectControllerFindByKeyApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/projects/${queryArg.project}`,
        }),
        providesTags: ["Organizations"],
      }),
      organizationScoreControllerCreate: build.mutation<
        OrganizationScoreControllerCreateApiResponse,
        OrganizationScoreControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/scores`,
          method: "POST",
          body: queryArg.organizationScoreCreateDto,
        }),
        invalidatesTags: ["Organizations"],
      }),
      organizationScoreControllerList: build.query<
        OrganizationScoreControllerListApiResponse,
        OrganizationScoreControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/scores`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Organizations"],
      }),
      organizationScoreControllerCount: build.query<
        OrganizationScoreControllerCountApiResponse,
        OrganizationScoreControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/organizations/${queryArg.organization}/scores/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Organizations"],
      }),
      projectMemberControllerCreate: build.mutation<
        ProjectMemberControllerCreateApiResponse,
        ProjectMemberControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/projectmembers`,
          method: "POST",
          body: queryArg.projectMemberCreateDto,
        }),
        invalidatesTags: ["ProjectMembers"],
      }),
      projectMemberControllerList: build.query<
        ProjectMemberControllerListApiResponse,
        ProjectMemberControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/projectmembers`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["ProjectMembers"],
      }),
      projectMemberControllerCount: build.query<
        ProjectMemberControllerCountApiResponse,
        ProjectMemberControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/projectmembers/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["ProjectMembers"],
      }),
      projectMemberControllerFindById: build.query<
        ProjectMemberControllerFindByIdApiResponse,
        ProjectMemberControllerFindByIdApiArg
      >({
        query: (queryArg) => ({ url: `/projectmembers/${queryArg.member}` }),
        providesTags: ["ProjectMembers"],
      }),
      projectMemberControllerUpdateById: build.mutation<
        ProjectMemberControllerUpdateByIdApiResponse,
        ProjectMemberControllerUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/projectmembers/${queryArg.member}`,
          method: "PATCH",
          body: queryArg.projectMemberUpdateDto,
        }),
        invalidatesTags: ["ProjectMembers"],
      }),
      projectMemberControllerDeleteById: build.mutation<
        ProjectMemberControllerDeleteByIdApiResponse,
        ProjectMemberControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/projectmembers/${queryArg.member}`,
          method: "DELETE",
        }),
        invalidatesTags: ["ProjectMembers"],
      }),
      projectMemberSubmissionControllerList: build.query<
        ProjectMemberSubmissionControllerListApiResponse,
        ProjectMemberSubmissionControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/projectmembers/${queryArg.member}/submissions`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["ProjectMembers"],
      }),
      projectMemberSubmissionControllerCount: build.query<
        ProjectMemberSubmissionControllerCountApiResponse,
        ProjectMemberSubmissionControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/projectmembers/${queryArg.member}/submissions/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["ProjectMembers"],
      }),
      projectMemberUserControllerGet: build.query<
        ProjectMemberUserControllerGetApiResponse,
        ProjectMemberUserControllerGetApiArg
      >({
        query: (queryArg) => ({
          url: `/projectmembers/${queryArg.member}/user`,
        }),
        providesTags: ["ProjectMembers"],
      }),
      projectGroupControllerCreate: build.mutation<
        ProjectGroupControllerCreateApiResponse,
        ProjectGroupControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/projectgroups`,
          method: "POST",
          body: queryArg.projectGroupCreateDto,
        }),
        invalidatesTags: ["ProjectGroups"],
      }),
      projectGroupControllerList: build.query<
        ProjectGroupControllerListApiResponse,
        ProjectGroupControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/projectgroups`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["ProjectGroups"],
      }),
      projectGroupControllerCount: build.query<
        ProjectGroupControllerCountApiResponse,
        ProjectGroupControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/projectgroups/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["ProjectGroups"],
      }),
      projectGroupControllerFindById: build.query<
        ProjectGroupControllerFindByIdApiResponse,
        ProjectGroupControllerFindByIdApiArg
      >({
        query: (queryArg) => ({ url: `/projectgroups/${queryArg.group}` }),
        providesTags: ["ProjectGroups"],
      }),
      projectGroupControllerUpdateById: build.mutation<
        ProjectGroupControllerUpdateByIdApiResponse,
        ProjectGroupControllerUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/projectgroups/${queryArg.group}`,
          method: "PATCH",
          body: queryArg.projectGroupUpdateDto,
        }),
        invalidatesTags: ["ProjectGroups"],
      }),
      projectGroupControllerDeleteById: build.mutation<
        ProjectGroupControllerDeleteByIdApiResponse,
        ProjectGroupControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/projectgroups/${queryArg.group}`,
          method: "DELETE",
        }),
        invalidatesTags: ["ProjectGroups"],
      }),
      projectGroupControllerProgressive: build.query<
        ProjectGroupControllerProgressiveApiResponse,
        ProjectGroupControllerProgressiveApiArg
      >({
        query: (queryArg) => ({
          url: `/projectgroups/${queryArg.group}/progressive`,
        }),
        providesTags: ["ProjectGroups"],
      }),
      projectGroupMemberControllerList: build.query<
        ProjectGroupMemberControllerListApiResponse,
        ProjectGroupMemberControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/projectgroups/${queryArg.group}/members`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["ProjectGroups"],
      }),
      projectGroupMemberControllerCount: build.query<
        ProjectGroupMemberControllerCountApiResponse,
        ProjectGroupMemberControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/projectgroups/${queryArg.group}/members/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["ProjectGroups"],
      }),
      projectGroupSubmissionControllerList: build.query<
        ProjectGroupSubmissionControllerListApiResponse,
        ProjectGroupSubmissionControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/projectgroups/${queryArg.group}/submissions`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["ProjectGroups"],
      }),
      projectGroupSubmissionControllerCount: build.query<
        ProjectGroupSubmissionControllerCountApiResponse,
        ProjectGroupSubmissionControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/projectgroups/${queryArg.group}/submissions/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["ProjectGroups"],
      }),
      projectInviteControllerCreate: build.mutation<
        ProjectInviteControllerCreateApiResponse,
        ProjectInviteControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/projectinvites`,
          method: "POST",
          body: queryArg.projectInviteCreateDto,
        }),
        invalidatesTags: ["ProjectInvites"],
      }),
      projectInviteControllerList: build.query<
        ProjectInviteControllerListApiResponse,
        ProjectInviteControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/projectinvites`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["ProjectInvites"],
      }),
      projectInviteControllerCount: build.query<
        ProjectInviteControllerCountApiResponse,
        ProjectInviteControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/projectinvites/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["ProjectInvites"],
      }),
      projectInviteControllerFindById: build.query<
        ProjectInviteControllerFindByIdApiResponse,
        ProjectInviteControllerFindByIdApiArg
      >({
        query: (queryArg) => ({ url: `/projectinvites/${queryArg.invite}` }),
        providesTags: ["ProjectInvites"],
      }),
      projectInviteControllerUpdateById: build.mutation<
        ProjectInviteControllerUpdateByIdApiResponse,
        ProjectInviteControllerUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/projectinvites/${queryArg.invite}`,
          method: "PATCH",
          body: queryArg.projectInviteUpdateDto,
        }),
        invalidatesTags: ["ProjectInvites"],
      }),
      projectInviteControllerDeleteById: build.mutation<
        ProjectInviteControllerDeleteByIdApiResponse,
        ProjectInviteControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/projectinvites/${queryArg.invite}`,
          method: "DELETE",
        }),
        invalidatesTags: ["ProjectInvites"],
      }),
      projectInviteControllerRegister: build.mutation<
        ProjectInviteControllerRegisterApiResponse,
        ProjectInviteControllerRegisterApiArg
      >({
        query: (queryArg) => ({
          url: `/projectinvites/register`,
          method: "POST",
          body: queryArg.projectInviteRegisterDto,
        }),
        invalidatesTags: ["ProjectInvites"],
      }),
      surveyControllerCreate: build.mutation<
        SurveyControllerCreateApiResponse,
        SurveyControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys`,
          method: "POST",
          body: queryArg.surveyCreateDto,
        }),
        invalidatesTags: ["Surveys"],
      }),
      surveyControllerList: build.query<
        SurveyControllerListApiResponse,
        SurveyControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Surveys"],
      }),
      surveyControllerCount: build.query<
        SurveyControllerCountApiResponse,
        SurveyControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Surveys"],
      }),
      surveyControllerGetSources: build.query<
        SurveyControllerGetSourcesApiResponse,
        SurveyControllerGetSourcesApiArg
      >({
        query: () => ({ url: `/surveys/sources` }),
        providesTags: ["Surveys"],
      }),
      surveyControllerGetSourceData: build.query<
        SurveyControllerGetSourceDataApiResponse,
        SurveyControllerGetSourceDataApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/sources/${queryArg.source}/data`,
        }),
        providesTags: ["Surveys"],
      }),
      surveyControllerFindById: build.query<
        SurveyControllerFindByIdApiResponse,
        SurveyControllerFindByIdApiArg
      >({
        query: (queryArg) => ({ url: `/surveys/${queryArg.survey}` }),
        providesTags: ["Surveys"],
      }),
      surveyControllerUpdateById: build.mutation<
        SurveyControllerUpdateByIdApiResponse,
        SurveyControllerUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/${queryArg.survey}`,
          method: "PATCH",
          body: queryArg.surveyUpdateDto,
        }),
        invalidatesTags: ["Surveys"],
      }),
      surveyControllerDeleteById: build.mutation<
        SurveyControllerDeleteByIdApiResponse,
        SurveyControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/${queryArg.survey}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Surveys"],
      }),
      surveyControllerOperation: build.mutation<
        SurveyControllerOperationApiResponse,
        SurveyControllerOperationApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/${queryArg.survey}/operation`,
          method: "POST",
          body: queryArg.surveyOperationDataDto,
        }),
        invalidatesTags: ["Surveys"],
      }),
      surveyControllerReplaceRoot: build.mutation<
        SurveyControllerReplaceRootApiResponse,
        SurveyControllerReplaceRootApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/${queryArg.survey}/schema`,
          method: "POST",
          body: queryArg.surveyReplaceRootDataDto,
        }),
        invalidatesTags: ["Surveys"],
      }),
      surveyControllerValid: build.query<
        SurveyControllerValidApiResponse,
        SurveyControllerValidApiArg
      >({
        query: (queryArg) => ({ url: `/surveys/${queryArg.survey}/valid` }),
        providesTags: ["Surveys"],
      }),
      surveyControllerActivate: build.mutation<
        SurveyControllerActivateApiResponse,
        SurveyControllerActivateApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/${queryArg.survey}/activate`,
          method: "POST",
        }),
        invalidatesTags: ["Surveys"],
      }),
      surveyControllerDeactivate: build.mutation<
        SurveyControllerDeactivateApiResponse,
        SurveyControllerDeactivateApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/${queryArg.survey}/deactivate`,
          method: "POST",
        }),
        invalidatesTags: ["Surveys"],
      }),
      surveyControllerUploadIcon: build.mutation<
        SurveyControllerUploadIconApiResponse,
        SurveyControllerUploadIconApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/${queryArg.survey}/icon`,
          method: "POST",
          body: queryArg.fileUploadDto,
        }),
        invalidatesTags: ["Surveys"],
      }),
      surveyControllerDownloadIcon: build.query<
        SurveyControllerDownloadIconApiResponse,
        SurveyControllerDownloadIconApiArg
      >({
        query: (queryArg) => ({ url: `/surveys/${queryArg.survey}/icon` }),
        providesTags: ["Surveys"],
      }),
      surveySubmissionControllerCreate: build.mutation<
        SurveySubmissionControllerCreateApiResponse,
        SurveySubmissionControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/${queryArg.survey}/submissions`,
          method: "POST",
          body: queryArg.surveySubmissionCreateDto,
        }),
        invalidatesTags: ["Surveys"],
      }),
      surveySubmissionControllerList: build.query<
        SurveySubmissionControllerListApiResponse,
        SurveySubmissionControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/${queryArg.survey}/submissions`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Surveys"],
      }),
      surveySubmissionControllerSubmitPublic: build.mutation<
        SurveySubmissionControllerSubmitPublicApiResponse,
        SurveySubmissionControllerSubmitPublicApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/${queryArg.survey}/submissions/public`,
          method: "POST",
          body: queryArg.surveyPublicSubmissionCreateDto,
        }),
        invalidatesTags: ["Surveys"],
      }),
      surveySubmissionControllerCount: build.query<
        SurveySubmissionControllerCountApiResponse,
        SurveySubmissionControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/${queryArg.survey}/submissions/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Surveys"],
      }),
      surveySubmissionControllerExport: build.mutation<
        SurveySubmissionControllerExportApiResponse,
        SurveySubmissionControllerExportApiArg
      >({
        query: (queryArg) => ({
          url: `/surveys/${queryArg.survey}/submissions/export`,
          method: "POST",
        }),
        invalidatesTags: ["Surveys"],
      }),
      submissionControllerCreate: build.mutation<
        SubmissionControllerCreateApiResponse,
        SubmissionControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/submissions`,
          method: "POST",
          body: queryArg.submissionCreateDto,
        }),
        invalidatesTags: ["Submissions"],
      }),
      submissionControllerList: build.query<
        SubmissionControllerListApiResponse,
        SubmissionControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/submissions`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Submissions"],
      }),
      submissionControllerCount: build.query<
        SubmissionControllerCountApiResponse,
        SubmissionControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/submissions/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Submissions"],
      }),
      submissionControllerFindById: build.query<
        SubmissionControllerFindByIdApiResponse,
        SubmissionControllerFindByIdApiArg
      >({
        query: (queryArg) => ({ url: `/submissions/${queryArg.submission}` }),
        providesTags: ["Submissions"],
      }),
      submissionControllerUpdateById: build.mutation<
        SubmissionControllerUpdateByIdApiResponse,
        SubmissionControllerUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/submissions/${queryArg.submission}`,
          method: "PATCH",
          body: queryArg.submissionUpdateDto,
        }),
        invalidatesTags: ["Submissions"],
      }),
      submissionControllerDeleteById: build.mutation<
        SubmissionControllerDeleteByIdApiResponse,
        SubmissionControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/submissions/${queryArg.submission}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Submissions"],
      }),
      submissionControllerReset: build.mutation<
        SubmissionControllerResetApiResponse,
        SubmissionControllerResetApiArg
      >({
        query: (queryArg) => ({
          url: `/submissions/${queryArg.submission}/reset`,
          method: "POST",
        }),
        invalidatesTags: ["Submissions"],
      }),
      submissionControllerSubmit: build.mutation<
        SubmissionControllerSubmitApiResponse,
        SubmissionControllerSubmitApiArg
      >({
        query: (queryArg) => ({
          url: `/submissions/${queryArg.submission}/submit`,
          method: "POST",
        }),
        invalidatesTags: ["Submissions"],
      }),
      submissionControllerFlow: build.mutation<
        SubmissionControllerFlowApiResponse,
        SubmissionControllerFlowApiArg
      >({
        query: (queryArg) => ({
          url: `/submissions/${queryArg.submission}/flow`,
          method: "POST",
          body: queryArg.submissionAnswerDto,
        }),
        invalidatesTags: ["Submissions"],
      }),
      submissionControllerSetAnswers: build.mutation<
        SubmissionControllerSetAnswersApiResponse,
        SubmissionControllerSetAnswersApiArg
      >({
        query: (queryArg) => ({
          url: `/submissions/${queryArg.submission}/answers`,
          method: "POST",
          body: queryArg.submissionAnswersDto,
        }),
        invalidatesTags: ["Submissions"],
      }),
      scorePublicControllerList: build.query<
        ScorePublicControllerListApiResponse,
        ScorePublicControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/scores/public`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Scores"],
      }),
      scorePublicControllerCount: build.query<
        ScorePublicControllerCountApiResponse,
        ScorePublicControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/scores/public/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Scores"],
      }),
      scorePublicControllerFindById: build.query<
        ScorePublicControllerFindByIdApiResponse,
        ScorePublicControllerFindByIdApiArg
      >({
        query: (queryArg) => ({ url: `/scores/public/${queryArg.score}` }),
        providesTags: ["Scores"],
      }),
      scorePublicControllerCompute: build.mutation<
        ScorePublicControllerComputeApiResponse,
        ScorePublicControllerComputeApiArg
      >({
        query: (queryArg) => ({
          url: `/scores/public/${queryArg.score}/compute`,
          method: "POST",
          body: queryArg.object,
        }),
        invalidatesTags: ["Scores"],
      }),
      scoreControllerCreate: build.mutation<
        ScoreControllerCreateApiResponse,
        ScoreControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/scores`,
          method: "POST",
          body: queryArg.scoreCreateDto,
        }),
        invalidatesTags: ["Scores"],
      }),
      scoreControllerList: build.query<
        ScoreControllerListApiResponse,
        ScoreControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/scores`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Scores"],
      }),
      scoreControllerCount: build.query<
        ScoreControllerCountApiResponse,
        ScoreControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/scores/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Scores"],
      }),
      scoreControllerFindById: build.query<
        ScoreControllerFindByIdApiResponse,
        ScoreControllerFindByIdApiArg
      >({
        query: (queryArg) => ({ url: `/scores/${queryArg.score}` }),
        providesTags: ["Scores"],
      }),
      scoreControllerUpdateById: build.mutation<
        ScoreControllerUpdateByIdApiResponse,
        ScoreControllerUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/scores/${queryArg.score}`,
          method: "PATCH",
          body: queryArg.scoreUpdateDto,
        }),
        invalidatesTags: ["Scores"],
      }),
      scoreControllerDeleteById: build.mutation<
        ScoreControllerDeleteByIdApiResponse,
        ScoreControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/scores/${queryArg.score}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Scores"],
      }),
      scoreControllerValidate: build.mutation<
        ScoreControllerValidateApiResponse,
        ScoreControllerValidateApiArg
      >({
        query: (queryArg) => ({
          url: `/scores/${queryArg.score}/validate`,
          method: "POST",
        }),
        invalidatesTags: ["Scores"],
      }),
      scoreControllerCompute: build.mutation<
        ScoreControllerComputeApiResponse,
        ScoreControllerComputeApiArg
      >({
        query: (queryArg) => ({
          url: `/scores/${queryArg.score}/compute`,
          method: "POST",
          body: queryArg.object,
        }),
        invalidatesTags: ["Scores"],
      }),
      testControllerCreate: build.mutation<
        TestControllerCreateApiResponse,
        TestControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/tests`,
          method: "POST",
          body: queryArg.testCreateDto,
        }),
        invalidatesTags: ["Tests"],
      }),
      testControllerList: build.query<
        TestControllerListApiResponse,
        TestControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/tests`,
          params: {
            token: queryArg.token,
            where: queryArg.where,
            fields: queryArg.fields,
            include: queryArg.include,
            limit: queryArg.limit,
            sort: queryArg.sort,
          },
        }),
        providesTags: ["Tests"],
      }),
      testControllerCount: build.query<
        TestControllerCountApiResponse,
        TestControllerCountApiArg
      >({
        query: (queryArg) => ({
          url: `/tests/count`,
          params: {
            where: queryArg.where,
          },
        }),
        providesTags: ["Tests"],
      }),
      testControllerFindById: build.query<
        TestControllerFindByIdApiResponse,
        TestControllerFindByIdApiArg
      >({
        query: (queryArg) => ({ url: `/tests/${queryArg.test}` }),
        providesTags: ["Tests"],
      }),
      testControllerUpdateById: build.mutation<
        TestControllerUpdateByIdApiResponse,
        TestControllerUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/tests/${queryArg.test}`,
          method: "PATCH",
          body: queryArg.testUpdateDto,
        }),
        invalidatesTags: ["Tests"],
      }),
      testControllerDeleteById: build.mutation<
        TestControllerDeleteByIdApiResponse,
        TestControllerDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/tests/${queryArg.test}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Tests"],
      }),
      testControllerHistory: build.query<
        TestControllerHistoryApiResponse,
        TestControllerHistoryApiArg
      >({
        query: (queryArg) => ({ url: `/tests/${queryArg.test}/history` }),
        providesTags: ["Tests"],
      }),
      testControllerLog: build.query<
        TestControllerLogApiResponse,
        TestControllerLogApiArg
      >({
        query: (queryArg) => ({ url: `/tests/${queryArg.test}/log` }),
        providesTags: ["Tests"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as enhancedApi };
export type AuthControllerLoginApiResponse =
  /** status 200  */ LoginResponseDto;
export type AuthControllerLoginApiArg = {
  loginDto: LoginDto;
};
export type AuthControllerSignupApiResponse = /** status 200  */ boolean;
export type AuthControllerSignupApiArg = {
  signupDto: SignupDto;
};
export type AuthControllerRefreshApiResponse =
  /** status 200  */ LoginResponseDto;
export type AuthControllerRefreshApiArg = void;
export type AuthControllerLogoutApiResponse = /** status 200  */ boolean;
export type AuthControllerLogoutApiArg = void;
export type AuthControllerSendForgotPasswordEmailApiResponse =
  /** status 200  */ boolean;
export type AuthControllerSendForgotPasswordEmailApiArg = {
  emailDto: EmailDto;
};
export type AuthControllerHandleForgotPasswordApiResponse =
  /** status 200  */ boolean;
export type AuthControllerHandleForgotPasswordApiArg = {
  emailResetPasswordDto: EmailResetPasswordDto;
};
export type AuthControllerSendVerificationEmailApiResponse =
  /** status 200  */ boolean;
export type AuthControllerSendVerificationEmailApiArg = {
  emailDto: EmailDto;
};
export type AuthControllerHandleVerificationEmailApiResponse =
  /** status 200  */ boolean;
export type AuthControllerHandleVerificationEmailApiArg = {
  email: string;
  token: string;
  redirectUrl?: string;
};
export type UserControllerChangePasswordApiResponse =
  /** status 200  */ boolean;
export type UserControllerChangePasswordApiArg = {
  changePasswordDto: ChangePasswordDto;
};
export type UserControllerMeApiResponse = /** status 200  */ User;
export type UserControllerMeApiArg = void;
export type UserControllerListApiResponse =
  /** status 200  */ UserPaginationResponse;
export type UserControllerListApiArg = {
  token?: string;
  where?: UserQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type UserControllerCountApiResponse = /** status 200 Count */ number;
export type UserControllerCountApiArg = {
  where?: UserQueryDto;
};
export type UserControllerFindByIdApiResponse = /** status 200  */ User;
export type UserControllerFindByIdApiArg = {
  user: string;
};
export type UserControllerUpdateByIdApiResponse = /** status 200  */ User;
export type UserControllerUpdateByIdApiArg = {
  user: string;
  userUpdateDto: UserUpdateDto;
};
export type UserControllerDeleteByIdApiResponse = /** status 200  */ boolean;
export type UserControllerDeleteByIdApiArg = {
  user: string;
};
export type UserControllerSetRoleApiResponse = /** status 200  */ User;
export type UserControllerSetRoleApiArg = {
  userSetRoleDto: UserSetRoleDto;
};
export type UserControllerChangeEmailApiResponse = /** status 200  */ boolean;
export type UserControllerChangeEmailApiArg = {
  changeEmailDto: ChangeEmailDto;
};
export type UserControllerUploadIconApiResponse = /** status 200  */ User;
export type UserControllerUploadIconApiArg = {
  user: string;
  fileUploadDto: FileUploadDto;
};
export type UserControllerDownloadIconApiResponse = unknown;
export type UserControllerDownloadIconApiArg = {
  user: string;
};
export type UserControllerDeleteIconApiResponse = /** status 200  */ User;
export type UserControllerDeleteIconApiArg = {
  user: string;
};
export type UserPreferencesControllerSetApiResponse = unknown;
export type UserPreferencesControllerSetApiArg = {
  user: string;
  userPreferenceSetDto: UserPreferenceSetDto;
};
export type UserPreferencesControllerGetApiResponse = unknown;
export type UserPreferencesControllerGetApiArg = {
  user: string;
  key: string;
};
export type UserPreferencesControllerUnsetApiResponse =
  /** status 200  */ boolean;
export type UserPreferencesControllerUnsetApiArg = {
  user: string;
  key: string;
};
export type UserKeyControllerCreateApiResponse = /** status 200  */ string;
export type UserKeyControllerCreateApiArg = {
  user: string;
  userKeyDataDto: UserKeyDataDto;
};
export type UserKeyControllerFindApiResponse = /** status 200  */ UserKey[];
export type UserKeyControllerFindApiArg = {
  user: string;
};
export type UserKeyControllerDeleteByIdApiResponse = /** status 200  */ boolean;
export type UserKeyControllerDeleteByIdApiArg = {
  user: string;
  key: string;
};
export type UserOrganizationControllerCreateApiResponse =
  /** status 200  */ Organization;
export type UserOrganizationControllerCreateApiArg = {
  user: string;
  userOrganizationCreateDto: UserOrganizationCreateDto;
};
export type UserOrganizationControllerListApiResponse =
  /** status 200  */ OrganizationPaginationResponse;
export type UserOrganizationControllerListApiArg = {
  user: string;
  token?: string;
  where?: UserOrganizationQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type UserOrganizationMemberControllerListApiResponse =
  /** status 200  */ OrganizationMemberPaginationResponse;
export type UserOrganizationMemberControllerListApiArg = {
  user: string;
  token?: string;
  where?: UserOrganizationMemberQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type UserOrganizationMemberControllerCountApiResponse =
  /** status 200  */ number;
export type UserOrganizationMemberControllerCountApiArg = {
  user: string;
  where?: UserOrganizationMemberQueryDto;
};
export type UserProjectMemberControllerListApiResponse =
  /** status 200  */ ProjectMemberPaginationResponse;
export type UserProjectMemberControllerListApiArg = {
  user: string;
  token?: string;
  where?: UserProjectMemberQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type UserProjectMemberControllerCountApiResponse =
  /** status 200  */ number;
export type UserProjectMemberControllerCountApiArg = {
  user: string;
  where?: UserProjectMemberQueryDto;
};
export type UserProjectInviteControllerAcceptApiResponse =
  /** status 200  */ boolean;
export type UserProjectInviteControllerAcceptApiArg = {
  user: string;
  userProjectInviteAcceptDto: UserProjectInviteAcceptDto;
};
export type UserProjectInviteControllerListApiResponse =
  /** status 200 Query result */ ProjectInvitePaginationResponse;
export type UserProjectInviteControllerListApiArg = {
  user: string;
  token?: string;
  where?: UserProjectInviteQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type UserProjectInviteControllerCountApiResponse =
  /** status 200  */ number;
export type UserProjectInviteControllerCountApiArg = {
  user: string;
  where?: UserProjectInviteQueryDto;
};
export type ProjectPublicControllerListApiResponse =
  /** status 200  */ ProjectPaginationResponse;
export type ProjectPublicControllerListApiArg = {
  token?: string;
  where?: ProjectQueryDto;
  fields?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ProjectPublicControllerCountApiResponse =
  /** status 200 Count */ number;
export type ProjectPublicControllerCountApiArg = {
  where?: ProjectQueryDto;
};
export type ProjectPublicControllerFindByIdApiResponse =
  /** status 200 Project instance */ Project;
export type ProjectPublicControllerFindByIdApiArg = {
  project: string;
};
export type ProjectPublicControllerGetOrganizationApiResponse =
  /** status 200  */ Organization;
export type ProjectPublicControllerGetOrganizationApiArg = {
  project: string;
};
export type ProjectControllerCreateApiResponse =
  /** status 200 Created Project */ Project;
export type ProjectControllerCreateApiArg = {
  projectCreateDto: ProjectCreateDto;
};
export type ProjectControllerListApiResponse =
  /** status 200 Query result */ ProjectPaginationResponse;
export type ProjectControllerListApiArg = {
  token?: string;
  where?: ProjectQueryDto;
  fields?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ProjectControllerCountApiResponse = /** status 200 Count */ number;
export type ProjectControllerCountApiArg = {
  where?: ProjectQueryDto;
};
export type ProjectControllerFindByIdApiResponse =
  /** status 200 Project instance */ Project;
export type ProjectControllerFindByIdApiArg = {
  project: string;
};
export type ProjectControllerUpdateByIdApiResponse =
  /** status 200 Updated Project */ Project;
export type ProjectControllerUpdateByIdApiArg = {
  project: string;
  projectUpdateDto: ProjectUpdateDto;
};
export type ProjectControllerDeleteByIdApiResponse = /** status 200  */ boolean;
export type ProjectControllerDeleteByIdApiArg = {
  project: string;
};
export type ProjectControllerGetOrganizationApiResponse =
  /** status 200 Organization */ Organization;
export type ProjectControllerGetOrganizationApiArg = {
  project: string;
};
export type ProjectControllerUploadIconApiResponse = /** status 200  */ Project;
export type ProjectControllerUploadIconApiArg = {
  project: string;
  fileUploadDto: FileUploadDto;
};
export type ProjectControllerDownloadIconApiResponse = unknown;
export type ProjectControllerDownloadIconApiArg = {
  project: string;
};
export type ProjectSurveyControllerCreateApiResponse =
  /** status 200 Created Survey */ Survey;
export type ProjectSurveyControllerCreateApiArg = {
  project: string;
  projectSurveyCreateDto: ProjectSurveyCreateDto;
};
export type ProjectSurveyControllerListApiResponse =
  /** status 200 Query result */ SurveyPaginationResponse;
export type ProjectSurveyControllerListApiArg = {
  project: string;
  token?: string;
  where?: ProjectSurveyQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ProjectSurveyControllerCountApiResponse = /** status 200  */ number;
export type ProjectSurveyControllerCountApiArg = {
  project: string;
  where?: ProjectSurveyQueryDto;
};
export type ProjectProjectMemberControllerListApiResponse =
  /** status 200 Query result */ ProjectMemberPaginationResponse;
export type ProjectProjectMemberControllerListApiArg = {
  project: string;
  token?: string;
  where?: ProjectProjectMemberQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ProjectProjectMemberControllerCountApiResponse =
  /** status 200  */ number;
export type ProjectProjectMemberControllerCountApiArg = {
  project: string;
  where?: ProjectProjectMemberQueryDto;
};
export type ProjectProjectMemberControllerExistsApiResponse =
  /** status 200  */ ProjectMember;
export type ProjectProjectMemberControllerExistsApiArg = {
  project: string;
  user: string;
};
export type ProjectProjectGroupControllerCreateApiResponse =
  /** status 200 Created ProjectGroup */ ProjectGroup;
export type ProjectProjectGroupControllerCreateApiArg = {
  project: string;
  projectProjectGroupCreateDto: ProjectProjectGroupCreateDto;
};
export type ProjectProjectGroupControllerListApiResponse =
  /** status 200 Query result */ ProjectGroupPaginationResponse;
export type ProjectProjectGroupControllerListApiArg = {
  project: string;
  token?: string;
  where?: ProjectProjectGroupQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ProjectProjectGroupControllerCountApiResponse =
  /** status 200  */ number;
export type ProjectProjectGroupControllerCountApiArg = {
  project: string;
  where?: ProjectProjectGroupQueryDto;
};
export type ProjectProjectInviteControllerInviteApiResponse =
  /** status 200 Invite response */ ProjectInvite;
export type ProjectProjectInviteControllerInviteApiArg = {
  project: string;
  projectInviteDto: ProjectInviteDto;
};
export type ProjectProjectInviteControllerListApiResponse =
  /** status 200 Query result */ ProjectInvitePaginationResponse;
export type ProjectProjectInviteControllerListApiArg = {
  project: string;
  token?: string;
  where?: ProjectProjectInviteQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ProjectProjectInviteControllerCountApiResponse =
  /** status 200  */ number;
export type ProjectProjectInviteControllerCountApiArg = {
  project: string;
  where?: ProjectProjectInviteQueryDto;
};
export type OrganizationControllerCreateApiResponse =
  /** status 200  */ Organization;
export type OrganizationControllerCreateApiArg = {
  organizationCreateDto: OrganizationCreateDto;
};
export type OrganizationControllerListApiResponse =
  /** status 200  */ OrganizationPaginationResponse;
export type OrganizationControllerListApiArg = {
  token?: string;
  where?: OrganizationQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type OrganizationControllerCountApiResponse =
  /** status 200 Count */ number;
export type OrganizationControllerCountApiArg = {
  where?: OrganizationQueryDto;
};
export type OrganizationControllerExistsApiResponse =
  /** status 200  */ boolean;
export type OrganizationControllerExistsApiArg = {
  organization: string;
};
export type OrganizationControllerFindByIdApiResponse =
  /** status 200  */ Organization;
export type OrganizationControllerFindByIdApiArg = {
  organization: string;
};
export type OrganizationControllerUpdateByIdApiResponse =
  /** status 200  */ Organization;
export type OrganizationControllerUpdateByIdApiArg = {
  organization: string;
  organizationUpdateDto: OrganizationUpdateDto;
};
export type OrganizationControllerDeleteByIdApiResponse =
  /** status 200  */ boolean;
export type OrganizationControllerDeleteByIdApiArg = {
  organization: string;
};
export type OrganizationControllerUploadIconApiResponse =
  /** status 200  */ Organization;
export type OrganizationControllerUploadIconApiArg = {
  organization: string;
  fileUploadDto: FileUploadDto;
};
export type OrganizationControllerDownloadIconApiResponse = unknown;
export type OrganizationControllerDownloadIconApiArg = {
  organization: string;
};
export type OrganizationControllerUploadBannerApiResponse =
  /** status 200  */ Organization;
export type OrganizationControllerUploadBannerApiArg = {
  organization: string;
  fileUploadDto: FileUploadDto;
};
export type OrganizationControllerDownloadBannerApiResponse = unknown;
export type OrganizationControllerDownloadBannerApiArg = {
  organization: string;
};
export type OrganizationMemberControllerCreateApiResponse =
  /** status 200  */ OrganizationMember;
export type OrganizationMemberControllerCreateApiArg = {
  organization: string;
  organizationMemberCreateDto: OrganizationMemberCreateDto;
};
export type OrganizationMemberControllerListApiResponse =
  /** status 200  */ OrganizationMemberPaginationResponse;
export type OrganizationMemberControllerListApiArg = {
  organization: string;
  token?: string;
  where?: OrganizationMemberQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type OrganizationMemberControllerCountApiResponse =
  /** status 200  */ number;
export type OrganizationMemberControllerCountApiArg = {
  organization: string;
  where?: OrganizationMemberQueryDto;
};
export type OrganizationMemberControllerFindByIdApiResponse =
  /** status 200  */ OrganizationMember;
export type OrganizationMemberControllerFindByIdApiArg = {
  organization: string;
  member: string;
};
export type OrganizationMemberControllerUpdateByIdApiResponse =
  /** status 200  */ OrganizationMember;
export type OrganizationMemberControllerUpdateByIdApiArg = {
  organization: string;
  member: string;
  organizationMemberUpdateDto: OrganizationMemberUpdateDto;
};
export type OrganizationMemberControllerDeleteByIdApiResponse =
  /** status 200  */ boolean;
export type OrganizationMemberControllerDeleteByIdApiArg = {
  organization: string;
  member: string;
};
export type OrganizationGroupControllerCreateApiResponse =
  /** status 200  */ OrganizationGroup;
export type OrganizationGroupControllerCreateApiArg = {
  organization: string;
  organizationGroupCreateDto: OrganizationGroupCreateDto;
};
export type OrganizationGroupControllerListApiResponse =
  /** status 200  */ OrganizationGroupPaginationResponse;
export type OrganizationGroupControllerListApiArg = {
  organization: string;
  token?: string;
  where?: OrganizationGroupQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type OrganizationGroupControllerCountApiResponse =
  /** status 200  */ number;
export type OrganizationGroupControllerCountApiArg = {
  organization: string;
  where?: OrganizationGroupQueryDto;
};
export type OrganizationGroupControllerFindByIdApiResponse =
  /** status 200  */ OrganizationGroup;
export type OrganizationGroupControllerFindByIdApiArg = {
  organization: string;
  group: string;
};
export type OrganizationGroupControllerUpdateByIdApiResponse =
  /** status 200  */ OrganizationGroup;
export type OrganizationGroupControllerUpdateByIdApiArg = {
  organization: string;
  group: string;
  organizationGroupUpdateDto: OrganizationGroupUpdateDto;
};
export type OrganizationGroupControllerDeleteByIdApiResponse =
  /** status 200  */ boolean;
export type OrganizationGroupControllerDeleteByIdApiArg = {
  organization: string;
  group: string;
};
export type OrganizationProjectControllerCreateApiResponse =
  /** status 200  */ Project;
export type OrganizationProjectControllerCreateApiArg = {
  organization: string;
  organizationProjectCreateDto: OrganizationProjectCreateDto;
};
export type OrganizationProjectControllerListApiResponse =
  /** status 200  */ ProjectPaginationResponse;
export type OrganizationProjectControllerListApiArg = {
  organization: string;
  token?: string;
  where?: OrganizationProjectQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type OrganizationProjectControllerCountApiResponse =
  /** status 200  */ number;
export type OrganizationProjectControllerCountApiArg = {
  organization: string;
  where?: OrganizationProjectQueryDto;
};
export type OrganizationProjectControllerFindByKeyApiResponse =
  /** status 200  */ Project;
export type OrganizationProjectControllerFindByKeyApiArg = {
  organization: string;
  project: string;
};
export type OrganizationScoreControllerCreateApiResponse =
  /** status 200  */ Score;
export type OrganizationScoreControllerCreateApiArg = {
  organization: string;
  organizationScoreCreateDto: OrganizationScoreCreateDto;
};
export type OrganizationScoreControllerListApiResponse =
  /** status 200  */ ScorePaginationResponse;
export type OrganizationScoreControllerListApiArg = {
  organization: string;
  token?: string;
  where?: OrganizationScoreQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type OrganizationScoreControllerCountApiResponse =
  /** status 200  */ number;
export type OrganizationScoreControllerCountApiArg = {
  organization: string;
  where?: OrganizationScoreQueryDto;
};
export type ProjectMemberControllerCreateApiResponse =
  /** status 200 Created ProjectMember */ ProjectMember;
export type ProjectMemberControllerCreateApiArg = {
  projectMemberCreateDto: ProjectMemberCreateDto;
};
export type ProjectMemberControllerListApiResponse =
  /** status 200 Query result */ ProjectMemberPaginationResponse;
export type ProjectMemberControllerListApiArg = {
  token?: string;
  where?: ProjectMemberQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ProjectMemberControllerCountApiResponse =
  /** status 200 Count */ number;
export type ProjectMemberControllerCountApiArg = {
  where?: ProjectMemberQueryDto;
};
export type ProjectMemberControllerFindByIdApiResponse =
  /** status 200 ProjectMember instance */ ProjectMember;
export type ProjectMemberControllerFindByIdApiArg = {
  member: string;
};
export type ProjectMemberControllerUpdateByIdApiResponse =
  /** status 200 Updated ProjectMember */ ProjectMember;
export type ProjectMemberControllerUpdateByIdApiArg = {
  member: string;
  projectMemberUpdateDto: ProjectMemberUpdateDto;
};
export type ProjectMemberControllerDeleteByIdApiResponse =
  /** status 200  */ boolean;
export type ProjectMemberControllerDeleteByIdApiArg = {
  member: string;
};
export type ProjectMemberSubmissionControllerListApiResponse =
  /** status 200  */ SubmissionPaginationResponse;
export type ProjectMemberSubmissionControllerListApiArg = {
  member: string;
  token?: string;
  where?: ProjectMemberSubmissionQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ProjectMemberSubmissionControllerCountApiResponse =
  /** status 200  */ number;
export type ProjectMemberSubmissionControllerCountApiArg = {
  member: string;
  where?: ProjectMemberSubmissionQueryDto;
};
export type ProjectMemberUserControllerGetApiResponse = /** status 200  */ User;
export type ProjectMemberUserControllerGetApiArg = {
  member: string;
};
export type ProjectGroupControllerCreateApiResponse =
  /** status 200 Created ProjectGroup */ ProjectGroup;
export type ProjectGroupControllerCreateApiArg = {
  projectGroupCreateDto: ProjectGroupCreateDto;
};
export type ProjectGroupControllerListApiResponse =
  /** status 200 Query result */ ProjectGroupPaginationResponse;
export type ProjectGroupControllerListApiArg = {
  token?: string;
  where?: ProjectGroupQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ProjectGroupControllerCountApiResponse =
  /** status 200 Count */ number;
export type ProjectGroupControllerCountApiArg = {
  where?: ProjectQueryDto;
};
export type ProjectGroupControllerFindByIdApiResponse =
  /** status 200 ProjectGroup instance */ ProjectGroup;
export type ProjectGroupControllerFindByIdApiArg = {
  group: string;
};
export type ProjectGroupControllerUpdateByIdApiResponse =
  /** status 200 Updated ProjectGroup */ ProjectGroup;
export type ProjectGroupControllerUpdateByIdApiArg = {
  group: string;
  projectGroupUpdateDto: ProjectGroupUpdateDto;
};
export type ProjectGroupControllerDeleteByIdApiResponse =
  /** status 200  */ boolean;
export type ProjectGroupControllerDeleteByIdApiArg = {
  group: string;
};
export type ProjectGroupControllerProgressiveApiResponse =
  /** status 200 New progressive */ number;
export type ProjectGroupControllerProgressiveApiArg = {
  group: string;
};
export type ProjectGroupMemberControllerListApiResponse =
  /** status 200 Query result */ ProjectMemberPaginationResponse;
export type ProjectGroupMemberControllerListApiArg = {
  group: string;
  token?: string;
  where?: ProjectGroupMemberQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ProjectGroupMemberControllerCountApiResponse =
  /** status 200 Count */ number;
export type ProjectGroupMemberControllerCountApiArg = {
  group: string;
  where?: ProjectGroupMemberQueryDto;
};
export type ProjectGroupSubmissionControllerListApiResponse =
  /** status 200  */ SubmissionPaginationResponse;
export type ProjectGroupSubmissionControllerListApiArg = {
  group: string;
  token?: string;
  where?: ProjectGroupSubmissionQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ProjectGroupSubmissionControllerCountApiResponse =
  /** status 200  */ number;
export type ProjectGroupSubmissionControllerCountApiArg = {
  group: string;
  where?: ProjectGroupSubmissionQueryDto;
};
export type ProjectInviteControllerCreateApiResponse =
  /** status 200 Created ProjectInvite */ ProjectInvite;
export type ProjectInviteControllerCreateApiArg = {
  projectInviteCreateDto: ProjectInviteCreateDto;
};
export type ProjectInviteControllerListApiResponse =
  /** status 200 Query result */ ProjectInvitePaginationResponse;
export type ProjectInviteControllerListApiArg = {
  token?: string;
  where?: ProjectInviteQueryDto;
  fields?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ProjectInviteControllerCountApiResponse =
  /** status 200 Count */ number;
export type ProjectInviteControllerCountApiArg = {
  where?: ProjectInviteQueryDto;
};
export type ProjectInviteControllerFindByIdApiResponse =
  /** status 200 ProjectInvite instance */ ProjectInvite;
export type ProjectInviteControllerFindByIdApiArg = {
  invite: string;
};
export type ProjectInviteControllerUpdateByIdApiResponse =
  /** status 200 Updated ProjectInvite */ ProjectInvite;
export type ProjectInviteControllerUpdateByIdApiArg = {
  invite: string;
  projectInviteUpdateDto: ProjectInviteUpdateDto;
};
export type ProjectInviteControllerDeleteByIdApiResponse =
  /** status 200  */ boolean;
export type ProjectInviteControllerDeleteByIdApiArg = {
  invite: string;
};
export type ProjectInviteControllerRegisterApiResponse =
  /** status 200  */ boolean;
export type ProjectInviteControllerRegisterApiArg = {
  projectInviteRegisterDto: ProjectInviteRegisterDto;
};
export type SurveyControllerCreateApiResponse =
  /** status 200 Created Survey */ Survey;
export type SurveyControllerCreateApiArg = {
  surveyCreateDto: SurveyCreateDto;
};
export type SurveyControllerListApiResponse =
  /** status 200 Query result */ SurveyPaginationResponse;
export type SurveyControllerListApiArg = {
  token?: string;
  where?: SurveyQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type SurveyControllerCountApiResponse = /** status 200 Count */ number;
export type SurveyControllerCountApiArg = {
  where?: SurveyQueryDto;
};
export type SurveyControllerGetSourcesApiResponse = /** status 200  */ Source;
export type SurveyControllerGetSourcesApiArg = void;
export type SurveyControllerGetSourceDataApiResponse =
  /** status 200  */ object;
export type SurveyControllerGetSourceDataApiArg = {
  source: string;
};
export type SurveyControllerFindByIdApiResponse =
  /** status 200 Survey instance */ Survey;
export type SurveyControllerFindByIdApiArg = {
  survey: string;
};
export type SurveyControllerUpdateByIdApiResponse =
  /** status 200 Updated Survey */ Survey;
export type SurveyControllerUpdateByIdApiArg = {
  survey: string;
  surveyUpdateDto: SurveyUpdateDto;
};
export type SurveyControllerDeleteByIdApiResponse = /** status 200  */ boolean;
export type SurveyControllerDeleteByIdApiArg = {
  survey: string;
};
export type SurveyControllerOperationApiResponse =
  /** status 200 Successful operation */ Survey;
export type SurveyControllerOperationApiArg = {
  survey: string;
  surveyOperationDataDto: SurveyOperationDataDto;
};
export type SurveyControllerReplaceRootApiResponse =
  /** status 200 Schema updated */ Survey;
export type SurveyControllerReplaceRootApiArg = {
  survey: string;
  surveyReplaceRootDataDto: SurveyReplaceRootDataDto;
};
export type SurveyControllerValidApiResponse = /** status 200  */ boolean;
export type SurveyControllerValidApiArg = {
  survey: string;
};
export type SurveyControllerActivateApiResponse = /** status 200  */ boolean;
export type SurveyControllerActivateApiArg = {
  survey: string;
};
export type SurveyControllerDeactivateApiResponse = /** status 200  */ boolean;
export type SurveyControllerDeactivateApiArg = {
  survey: string;
};
export type SurveyControllerUploadIconApiResponse = /** status 200  */ Survey;
export type SurveyControllerUploadIconApiArg = {
  survey: string;
  fileUploadDto: FileUploadDto;
};
export type SurveyControllerDownloadIconApiResponse = unknown;
export type SurveyControllerDownloadIconApiArg = {
  survey: string;
};
export type SurveySubmissionControllerCreateApiResponse =
  /** status 200 Created Submission */ Submission;
export type SurveySubmissionControllerCreateApiArg = {
  survey: string;
  surveySubmissionCreateDto: SurveySubmissionCreateDto;
};
export type SurveySubmissionControllerListApiResponse =
  /** status 200 Query result */ SubmissionPaginationResponse;
export type SurveySubmissionControllerListApiArg = {
  survey: string;
  token?: string;
  where?: SurveySubmissionQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type SurveySubmissionControllerSubmitPublicApiResponse =
  /** status 200 Created Submission */ Submission;
export type SurveySubmissionControllerSubmitPublicApiArg = {
  survey: string;
  surveyPublicSubmissionCreateDto: SurveyPublicSubmissionCreateDto;
};
export type SurveySubmissionControllerCountApiResponse =
  /** status 200  */ number;
export type SurveySubmissionControllerCountApiArg = {
  survey: string;
  where?: SurveySubmissionQueryDto;
};
export type SurveySubmissionControllerExportApiResponse =
  /** status 200  */ string[][];
export type SurveySubmissionControllerExportApiArg = {
  survey: string;
};
export type SubmissionControllerCreateApiResponse =
  /** status 200 Created Submission */ Submission;
export type SubmissionControllerCreateApiArg = {
  submissionCreateDto: SubmissionCreateDto;
};
export type SubmissionControllerListApiResponse =
  /** status 200 Query result */ SubmissionPaginationResponse;
export type SubmissionControllerListApiArg = {
  token?: string;
  where?: SubmissionQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type SubmissionControllerCountApiResponse =
  /** status 200 Count */ number;
export type SubmissionControllerCountApiArg = {
  where?: SubmissionQueryDto;
};
export type SubmissionControllerFindByIdApiResponse =
  /** status 200 Submission instance */ Submission;
export type SubmissionControllerFindByIdApiArg = {
  submission: string;
};
export type SubmissionControllerUpdateByIdApiResponse =
  /** status 200 Updated Submission */ Submission;
export type SubmissionControllerUpdateByIdApiArg = {
  submission: string;
  submissionUpdateDto: SubmissionUpdateDto;
};
export type SubmissionControllerDeleteByIdApiResponse =
  /** status 200  */ boolean;
export type SubmissionControllerDeleteByIdApiArg = {
  submission: string;
};
export type SubmissionControllerResetApiResponse =
  /** status 200  */ Submission;
export type SubmissionControllerResetApiArg = {
  submission: string;
};
export type SubmissionControllerSubmitApiResponse =
  /** status 200  */ Submission;
export type SubmissionControllerSubmitApiArg = {
  submission: string;
};
export type SubmissionControllerFlowApiResponse =
  /** status 200  */ SubmissionFlowResponseDto;
export type SubmissionControllerFlowApiArg = {
  submission: string;
  submissionAnswerDto: SubmissionAnswerDto;
};
export type SubmissionControllerSetAnswersApiResponse =
  /** status 200  */ Submission;
export type SubmissionControllerSetAnswersApiArg = {
  submission: string;
  submissionAnswersDto: SubmissionAnswersDto;
};
export type ScorePublicControllerListApiResponse =
  /** status 200  */ ScorePaginationResponse;
export type ScorePublicControllerListApiArg = {
  token?: string;
  where?: ScoreQueryDto;
  fields?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ScorePublicControllerCountApiResponse =
  /** status 200 Count */ number;
export type ScorePublicControllerCountApiArg = {
  where?: ScoreQueryDto;
};
export type ScorePublicControllerFindByIdApiResponse =
  /** status 200 Score instance */ Score;
export type ScorePublicControllerFindByIdApiArg = {
  score: string;
};
export type ScorePublicControllerComputeApiResponse = /** status 200  */ number;
export type ScorePublicControllerComputeApiArg = {
  score: string;
  /** Params format: number | [number, number] | null */
  object: Object;
};
export type ScoreControllerCreateApiResponse =
  /** status 200 Created Score */ Score;
export type ScoreControllerCreateApiArg = {
  scoreCreateDto: ScoreCreateDto;
};
export type ScoreControllerListApiResponse =
  /** status 200 Query result */ ScorePaginationResponse;
export type ScoreControllerListApiArg = {
  token?: string;
  where?: ScoreQueryDto;
  fields?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type ScoreControllerCountApiResponse = /** status 200 Count */ number;
export type ScoreControllerCountApiArg = {
  where?: ScoreQueryDto;
};
export type ScoreControllerFindByIdApiResponse =
  /** status 200 Score instance */ Score;
export type ScoreControllerFindByIdApiArg = {
  score: string;
};
export type ScoreControllerUpdateByIdApiResponse =
  /** status 200 Updated Score */ Score;
export type ScoreControllerUpdateByIdApiArg = {
  score: string;
  scoreUpdateDto: ScoreUpdateDto;
};
export type ScoreControllerDeleteByIdApiResponse = /** status 200  */ boolean;
export type ScoreControllerDeleteByIdApiArg = {
  score: string;
};
export type ScoreControllerValidateApiResponse = /** status 200  */ boolean;
export type ScoreControllerValidateApiArg = {
  score: string;
};
export type ScoreControllerComputeApiResponse = /** status 200  */ number;
export type ScoreControllerComputeApiArg = {
  score: string;
  /** Params format: number | [number, number] | null */
  object: Object;
};
export type TestControllerCreateApiResponse = /** status 200  */ TestModel;
export type TestControllerCreateApiArg = {
  testCreateDto: TestCreateDto;
};
export type TestControllerListApiResponse =
  /** status 200  */ TestPaginationResponse;
export type TestControllerListApiArg = {
  token?: string;
  where?: TestQueryDto;
  fields?: string;
  include?: string;
  limit?: number;
  sort?: 1 | -1;
};
export type TestControllerCountApiResponse = /** status 200 Count */ number;
export type TestControllerCountApiArg = {
  where?: TestQueryDto;
};
export type TestControllerFindByIdApiResponse = /** status 200  */ TestModel;
export type TestControllerFindByIdApiArg = {
  test: string;
};
export type TestControllerUpdateByIdApiResponse = /** status 200  */ TestModel;
export type TestControllerUpdateByIdApiArg = {
  test: string;
  testUpdateDto: TestUpdateDto;
};
export type TestControllerDeleteByIdApiResponse = /** status 200  */ boolean;
export type TestControllerDeleteByIdApiArg = {
  test: string;
};
export type TestControllerHistoryApiResponse = /** status 200  */ TestModel[];
export type TestControllerHistoryApiArg = {
  test: string;
};
export type TestControllerLogApiResponse = /** status 200  */ TestModelEvent[];
export type TestControllerLogApiArg = {
  test: string;
};
export type LoginResponseDto = {
  access_token: string;
  token_type: string;
  expires: number;
  refresh_token?: string;
};
export type LoginDto = {
  email: string;
  password: string;
};
export type SignupDto = {
  email: string;
  password: string;
};
export type EmailDto = {
  email: string;
};
export type EmailResetPasswordDto = {
  email: string;
  token: string;
  password: string;
};
export type ChangePasswordDto = {
  password: string;
  newPassword: string;
};
export type Role = "admin";
export type User = {
  id: string;
  email: string;
  role?: Role;
  verified?: boolean;
  first_name?: string;
  last_name?: string;
  icon?: string;
};
export type UserPaginationResponse = {
  next: string | null;
  prev: string | null;
  length: object;
  items: User[];
};
export type UserQueryDto = {
  id?: string;
  email?: string;
  role?: Role;
  verified?: boolean;
  first_name?: string;
  last_name?: string;
  icon?: string;
};
export type UserUpdateDto = {
  first_name?: string;
  last_name?: string;
};
export type UserSetRoleDto = {
  user: string;
  role: "admin";
};
export type ChangeEmailDto = {
  password: string;
  email: string;
};
export type FileUploadDto = {
  file: Blob;
};
export type UserPreferenceSetDto = {
  key: string;
  value: string;
};
export type UserKeyDataDto = {
  name: string;
  scope: string[];
};
export type UserKey = {
  id: string;
  userId: string;
  name: string;
  scope: string[];
};
export type OrganizationStatus = 0 | 1;
export type Organization = {
  id: string;
  owner: string;
  name: string;
  description?: string;
  slug?: string;
  status?: OrganizationStatus;
  icon?: string;
  banner?: string;
};
export type UserOrganizationCreateDto = {
  name: string;
  description?: string;
  slug?: string;
  status?: OrganizationStatus;
};
export type OrganizationPaginationResponse = {
  next: string | null;
  prev: string | null;
  length: object;
  items: Organization[];
};
export type UserOrganizationQueryDto = {
  id?: string;
  name?: string;
  description?: string;
  slug?: string;
  status?: OrganizationStatus;
  icon?: string;
  banner?: string;
};
export type OrganizationMember = {
  id: string;
  organization: string;
  user: string;
  group?: string;
  permissions?: string[];
};
export type OrganizationMemberPaginationResponse = {
  next: string | null;
  prev: string | null;
  length: object;
  items: OrganizationMember[];
};
export type UserOrganizationMemberQueryDto = {
  id?: string;
  group?: string;
  permissions?: string[];
};
export type ProjectMember = {
  id: string;
  project: string;
  user: string;
  group?: string;
  permissions?: string[];
};
export type ProjectMemberPaginationResponse = {
  next: string | null;
  prev: string | null;
  length: object;
  items: ProjectMember[];
};
export type UserProjectMemberQueryDto = {
  id?: string;
  project?: string;
  group?: string;
  permissions?: string[];
};
export type UserProjectInviteAcceptDto = {
  id: string;
  token: string;
};
export type ProjectInvite = {
  id: string;
  email: string;
  status: number;
  user?: string;
  project: string;
  group?: string;
  permissions?: string[];
};
export type ProjectInvitePaginationResponse = {
  next: string | null;
  prev: string | null;
  length: object;
  items: ProjectInvite[];
};
export type UserProjectInviteQueryDto = {
  id?: string;
  email?: string;
  status?: number;
  project?: string;
  group?: string;
  permissions?: string[];
};
export type ProjectStatus = 0 | 1;
export type ProjectType = "research" | "monitoring" | "survey";
export type Project = {
  id: string;
  organization: string;
  name: string;
  description?: string;
  slug?: string;
  status?: ProjectStatus;
  icon?: string;
  type?: ProjectType;
};
export type ProjectPaginationResponse = {
  next: string | null;
  prev: string | null;
  length: object;
  items: Project[];
};
export type ProjectQueryDto = {
  id?: string;
  organization?: string;
  name?: string;
  description?: string;
  slug?: string;
  status?: ProjectStatus;
  icon?: string;
  type?: ProjectType;
};
export type ProjectCreateDto = {
  organization: string;
  name: string;
  description?: string;
  slug?: string;
  status?: ProjectStatus;
  type?: ProjectType;
};
export type ProjectUpdateDto = {
  name?: string;
  description?: string;
  slug?: string;
  status?: ProjectStatus;
  type?: ProjectType;
};
export type ItemLayout = {};
export type ItemSchema = {
  /** Item ID */
  id: string;
  /** Item type */
  type: string;
  name?: string;
  text?: string;
  items?: ItemSchema[];
  layout?: ItemLayout;
};
export type SurveyType = 0 | 1;
export type SurveyTheme = {};
export type SurveySources = {};
export type SurveyRequirement = {
  /** survey id */
  survey: string;
  /** score */
  score?: object;
};
export type Survey = {
  id: string;
  /** The project id */
  project: string;
  /** The root item */
  root: ItemSchema;
  name: string;
  description?: string;
  active?: boolean;
  type: SurveyType;
  theme?: SurveyTheme;
  sources?: SurveySources;
  fingerprint: string;
  requirements?: SurveyRequirement[];
  score?: string;
  icon?: string;
};
export type ProjectSurveyCreateDto = {
  name: string;
  description?: string;
  type: SurveyType;
  theme?: SurveyTheme;
  sources?: SurveySources;
  requirements?: SurveyRequirement[];
  score?: string;
};
export type SurveyPaginationResponse = {
  next: string | null;
  prev: string | null;
  length: object;
  items: Survey[];
};
export type ProjectSurveyQueryDto = {
  id?: string;
  /** The root item */
  root?: ItemSchema;
  name?: string;
  description?: string;
  active?: boolean;
  type?: SurveyType;
  theme?: SurveyTheme;
  sources?: SurveySources;
  fingerprint?: string;
  requirements?: SurveyRequirement[];
  score?: string;
  icon?: string;
};
export type ProjectProjectMemberQueryDto = {
  id?: string;
  user?: string;
  group?: string;
  permissions?: string[];
};
export type ProjectGroup = {
  id: string;
  project: string;
  name: string;
  permissions?: string[];
  code?: string;
  progressive?: number;
};
export type ProjectProjectGroupCreateDto = {
  name: string;
  permissions?: string[];
  code?: string;
};
export type ProjectGroupPaginationResponse = {
  next: string | null;
  prev: string | null;
  length: object;
  items: ProjectGroup[];
};
export type ProjectProjectGroupQueryDto = {
  id?: string;
  name?: string;
  permissions?: string[];
  code?: string;
  progressive?: number;
};
export type ProjectInviteDto = {
  email: string;
  user?: string;
  group?: string;
  permissions?: string[];
};
export type ProjectProjectInviteQueryDto = {
  id?: string;
  email?: string;
  status?: number;
  user?: string;
  group?: string;
  permissions?: string[];
};
export type OrganizationCreateDto = {
  owner: string;
  name: string;
  description?: string;
  slug?: string;
  status?: OrganizationStatus;
};
export type OrganizationQueryDto = {
  id?: string;
  owner?: string;
  name?: string;
  description?: string;
  slug?: string;
  status?: OrganizationStatus;
  icon?: string;
  banner?: string;
};
export type OrganizationUpdateDto = {
  name?: string;
  description?: string;
  slug?: string;
  status?: OrganizationStatus;
};
export type OrganizationMemberCreateDto = {
  group?: string;
  permissions?: string[];
  email: string;
};
export type OrganizationMemberQueryDto = {
  id?: string;
  user?: string;
  group?: string;
  permissions?: string[];
};
export type OrganizationMemberUpdateDto = {
  group?: string;
  permissions?: string[];
};
export type OrganizationGroup = {
  id: string;
  organization: string;
  name: string;
  permissions?: string[];
};
export type OrganizationGroupCreateDto = {
  name: string;
  permissions?: string[];
};
export type OrganizationGroupPaginationResponse = {
  next: string | null;
  prev: string | null;
  length: object;
  items: OrganizationGroup[];
};
export type OrganizationGroupQueryDto = {
  id?: string;
  name?: string;
  permissions?: string[];
};
export type OrganizationGroupUpdateDto = {
  name?: string;
  permissions?: string[];
};
export type OrganizationProjectCreateDto = {
  name: string;
  description?: string;
  slug?: string;
  status?: ProjectStatus;
  type?: ProjectType;
};
export type OrganizationProjectQueryDto = {
  id?: string;
  name?: string;
  description?: string;
  slug?: string;
  status?: ProjectStatus;
  icon?: string;
  type?: ProjectType;
};
export type ScoreStatus = 0 | 1 | 2;
export type ScoreParameterMetric = {
  unit: string;
  text?: string;
  min?: number;
  max?: number;
};
export type ScoreParameterValue = {
  value: number;
  text?: string;
};
export type ScoreParameterInfo = {
  name: string;
  description?: string;
  optional?: boolean;
  metric?: ScoreParameterMetric[];
  values?: ScoreParameterValue[];
};
export type ScoreUsage = {
  instructions: string;
  when?: string;
  why?: string;
  evidence?: string;
};
export type ScoreOutput = {
  from: number;
  to: number;
  result: string;
  content?: string;
  severity?: number;
};
export type ScoreStatement = {
  description: string;
};
export type Score = {
  id: string;
  organization: string;
  name: string;
  description?: string;
  status?: ScoreStatus;
  text: string;
  params: ScoreParameterInfo[];
  version?: string;
  category?: string;
  usage: ScoreUsage;
  outputs: ScoreOutput[];
  unit: string;
  statements?: ScoreStatement[];
};
export type OrganizationScoreCreateDto = {
  name: string;
  description?: string;
  status?: ScoreStatus;
  text: string;
  params: ScoreParameterInfo[];
  version?: string;
  category?: string;
  usage: ScoreUsage;
  outputs: ScoreOutput[];
  unit: string;
  statements?: ScoreStatement[];
};
export type ScorePaginationResponse = {
  next: string | null;
  prev: string | null;
  length: object;
  items: Score[];
};
export type OrganizationScoreQueryDto = {
  id?: string;
  name?: string;
  description?: string;
  status?: ScoreStatus;
  text?: string;
  params?: ScoreParameterInfo[];
  version?: string;
  category?: string;
  usage?: ScoreUsage;
  outputs?: ScoreOutput[];
  unit?: string;
  statements?: ScoreStatement[];
};
export type ProjectMemberCreateDto = {
  project: string;
  user: string;
  group?: string;
  permissions?: string[];
};
export type ProjectMemberQueryDto = {
  id?: string;
  project?: string;
  user?: string;
  group?: string;
  permissions?: string[];
};
export type ProjectMemberUpdateDto = {
  group?: string;
  permissions?: string[];
};
export type AnswersMap = {};
export type Submission = {
  id: string;
  /** Project id */
  project: string;
  /** Survey id */
  survey: string;
  /** The answers */
  answers: AnswersMap;
  /** The pseudo id */
  pseudoId?: string;
  doctor?: string;
  patient?: string;
  submitted?: boolean;
  /** compilation time (seconds) */
  compilation_time?: number;
  score?: number;
};
export type SubmissionPaginationResponse = {
  next: string | null;
  prev: string | null;
  length: object;
  items: Submission[];
};
export type ProjectMemberSubmissionQueryDto = {
  id?: string;
  /** Survey id */
  survey?: string;
  /** The answers */
  answers?: AnswersMap;
  /** The pseudo id */
  pseudoId?: string;
  doctor?: string;
  patient?: string;
  submitted?: boolean;
  /** compilation time (seconds) */
  compilation_time?: number;
  score?: number;
};
export type ProjectGroupCreateDto = {
  project: string;
  name: string;
  permissions?: string[];
  code?: string;
};
export type ProjectGroupQueryDto = {
  id?: string;
  project?: string;
  name?: string;
  permissions?: string[];
  code?: string;
  progressive?: number;
};
export type ProjectGroupUpdateDto = {
  name?: string;
  permissions?: string[];
};
export type ProjectGroupMemberQueryDto = {
  id?: string;
  user?: string;
  permissions?: string[];
};
export type ProjectGroupSubmissionQueryDto = {
  id?: string;
  /** Survey id */
  survey?: string;
  /** The answers */
  answers?: AnswersMap;
  /** The pseudo id */
  pseudoId?: string;
  doctor?: string;
  patient?: string;
  submitted?: boolean;
  /** compilation time (seconds) */
  compilation_time?: number;
  score?: number;
};
export type ProjectInviteCreateDto = {
  email: string;
  user?: string;
  project: string;
  group?: string;
  permissions?: string[];
};
export type ProjectInviteQueryDto = {
  id?: string;
  email?: string;
  status?: number;
  user?: string;
  project?: string;
  group?: string;
  permissions?: string[];
};
export type ProjectInviteUpdateDto = {
  user?: string;
  group?: string;
  permissions?: string[];
};
export type ProjectInviteRegisterDto = {
  id: string;
  token: string;
  password: string;
};
export type SurveyCreateDto = {
  /** The project id */
  project: string;
  name: string;
  description?: string;
  type: SurveyType;
  theme?: SurveyTheme;
  sources?: SurveySources;
  requirements?: SurveyRequirement[];
  score?: string;
};
export type SurveyQueryDto = {
  id?: string;
  /** The project id */
  project?: string;
  /** The root item */
  root?: ItemSchema;
  name?: string;
  description?: string;
  active?: boolean;
  type?: SurveyType;
  theme?: SurveyTheme;
  sources?: SurveySources;
  fingerprint?: string;
  requirements?: SurveyRequirement[];
  score?: string;
  icon?: string;
};
export type Source = {
  /** Source id */
  id: string;
  name: string;
  description?: string;
  /** key field */
  key?: string;
  /** view mode */
  view?: number;
  /** fields info */
  fields?: object;
};
export type SurveyUpdateDto = {
  name?: string;
  description?: string;
  type?: SurveyType;
  theme?: SurveyTheme;
  sources?: SurveySources;
  requirements?: SurveyRequirement[];
  score?: string;
};
export type OperationType = 1 | 2 | 4 | 6 | 7;
export type OperationDataDto = {
  /** Item type */
  type: string;
  name?: string;
  text?: string;
  items?: ItemSchema[];
  layout?: ItemLayout;
};
export type OperationDto = {
  /** The operation to perform: add:1, update:2, remove:4, move:6, replace:7 */
  type: OperationType;
  /** The id of the item */
  id: string;
  data?: OperationDataDto & {
    [key: string]: any;
  };
  index?: number;
  parent?: string;
};
export type SurveyOperationDataDto = {
  /** Operations to execute */
  operation: OperationDto[];
  /** Fingerprint of the survey */
  fingerprint: string;
};
export type SurveyReplaceRootDataDto = {
  /** The root item */
  root: ItemSchema;
  fingerprint: string;
};
export type SurveySubmissionCreateDto = {
  /** The pseudo id */
  pseudoId?: string;
  doctor?: string;
  patient?: string;
};
export type SurveySubmissionQueryDto = {
  id?: string;
  /** Project id */
  project?: string;
  /** The answers */
  answers?: AnswersMap;
  /** The pseudo id */
  pseudoId?: string;
  doctor?: string;
  patient?: string;
  submitted?: boolean;
  /** compilation time (seconds) */
  compilation_time?: number;
  score?: number;
};
export type DbAnswerDto = {
  /** Id of question */
  id: string;
  /** Given answer */
  answer: object;
};
export type SurveyPublicSubmissionCreateDto = {
  /** compilation time (seconds) */
  compilation_time?: number;
  answers: DbAnswerDto[];
  /** The pseudo id */
  pseudoId?: string;
};
export type SubmissionCreateDto = {
  /** Survey id */
  survey: string;
  /** The pseudo id */
  pseudoId?: string;
  doctor?: string;
  patient?: string;
};
export type SubmissionQueryDto = {
  id?: string;
  /** Project id */
  project?: string;
  /** Survey id */
  survey?: string;
  /** The answers */
  answers?: AnswersMap;
  /** The pseudo id */
  pseudoId?: string;
  doctor?: string;
  patient?: string;
  submitted?: boolean;
  /** compilation time (seconds) */
  compilation_time?: number;
  score?: number;
};
export type SubmissionUpdateDto = {
  /** The pseudo id */
  pseudoId?: string;
  doctor?: string;
  patient?: string;
};
export type SubmissionFlowResponseDto = {
  next?: object;
};
export type SubmissionAnswerDto = {
  /** Id of question */
  id: string;
  /** Given answer */
  answer: object;
  /** compilation time (seconds) */
  compilation_time?: number;
};
export type SubmissionAnswersDto = {
  /** compilation time (seconds) */
  compilation_time?: number;
  answers: DbAnswerDto[];
};
export type ScoreQueryDto = {
  id?: string;
  organization?: string;
  name?: string;
  description?: string;
  status?: ScoreStatus;
  text?: string;
  params?: ScoreParameterInfo[];
  version?: string;
  category?: string;
  usage?: ScoreUsage;
  outputs?: ScoreOutput[];
  unit?: string;
  statements?: ScoreStatement[];
};
export type Object = {};
export type ScoreCreateDto = {
  organization: string;
  name: string;
  description?: string;
  status?: ScoreStatus;
  text: string;
  params: ScoreParameterInfo[];
  version?: string;
  category?: string;
  usage: ScoreUsage;
  outputs: ScoreOutput[];
  unit: string;
  statements?: ScoreStatement[];
};
export type ScoreUpdateDto = {
  name?: string;
  description?: string;
  status?: ScoreStatus;
  text?: string;
  params?: ScoreParameterInfo[];
  version?: string;
  category?: string;
  usage?: ScoreUsage;
  outputs?: ScoreOutput[];
  unit?: string;
  statements?: ScoreStatement[];
};
export type TestModel = {
  id: string;
  name: string;
  value: number;
  answers?: object;
};
export type TestCreateDto = {
  name: string;
  value: number;
  answers?: object;
};
export type TestPaginationResponse = {
  next: string | null;
  prev: string | null;
  length: object;
  items: TestModel[];
};
export type TestQueryDto = {
  id?: string;
  name?: string;
  value?: number;
  answers?: object;
};
export type TestUpdateDto = {
  name?: string;
  value?: number;
  answers?: object;
};
export type EventType = 1 | 2 | 4;
export type TestModelEvent = {
  user: string;
  action: string;
  id: string;
  target: string;
  type: EventType;
  data: object;
};
export const {
  useAuthControllerLoginMutation,
  useAuthControllerSignupMutation,
  useAuthControllerRefreshMutation,
  useAuthControllerLogoutMutation,
  useAuthControllerSendForgotPasswordEmailMutation,
  useAuthControllerHandleForgotPasswordMutation,
  useAuthControllerSendVerificationEmailMutation,
  useAuthControllerHandleVerificationEmailQuery,
  useLazyAuthControllerHandleVerificationEmailQuery,
  useUserControllerChangePasswordMutation,
  useUserControllerMeQuery,
  useLazyUserControllerMeQuery,
  useUserControllerListQuery,
  useLazyUserControllerListQuery,
  useUserControllerCountQuery,
  useLazyUserControllerCountQuery,
  useUserControllerFindByIdQuery,
  useLazyUserControllerFindByIdQuery,
  useUserControllerUpdateByIdMutation,
  useUserControllerDeleteByIdMutation,
  useUserControllerSetRoleMutation,
  useUserControllerChangeEmailMutation,
  useUserControllerUploadIconMutation,
  useUserControllerDownloadIconQuery,
  useLazyUserControllerDownloadIconQuery,
  useUserControllerDeleteIconMutation,
  useUserPreferencesControllerSetMutation,
  useUserPreferencesControllerGetQuery,
  useLazyUserPreferencesControllerGetQuery,
  useUserPreferencesControllerUnsetMutation,
  useUserKeyControllerCreateMutation,
  useUserKeyControllerFindQuery,
  useLazyUserKeyControllerFindQuery,
  useUserKeyControllerDeleteByIdMutation,
  useUserOrganizationControllerCreateMutation,
  useUserOrganizationControllerListQuery,
  useLazyUserOrganizationControllerListQuery,
  useUserOrganizationMemberControllerListQuery,
  useLazyUserOrganizationMemberControllerListQuery,
  useUserOrganizationMemberControllerCountQuery,
  useLazyUserOrganizationMemberControllerCountQuery,
  useUserProjectMemberControllerListQuery,
  useLazyUserProjectMemberControllerListQuery,
  useUserProjectMemberControllerCountQuery,
  useLazyUserProjectMemberControllerCountQuery,
  useUserProjectInviteControllerAcceptMutation,
  useUserProjectInviteControllerListQuery,
  useLazyUserProjectInviteControllerListQuery,
  useUserProjectInviteControllerCountQuery,
  useLazyUserProjectInviteControllerCountQuery,
  useProjectPublicControllerListQuery,
  useLazyProjectPublicControllerListQuery,
  useProjectPublicControllerCountQuery,
  useLazyProjectPublicControllerCountQuery,
  useProjectPublicControllerFindByIdQuery,
  useLazyProjectPublicControllerFindByIdQuery,
  useProjectPublicControllerGetOrganizationQuery,
  useLazyProjectPublicControllerGetOrganizationQuery,
  useProjectControllerCreateMutation,
  useProjectControllerListQuery,
  useLazyProjectControllerListQuery,
  useProjectControllerCountQuery,
  useLazyProjectControllerCountQuery,
  useProjectControllerFindByIdQuery,
  useLazyProjectControllerFindByIdQuery,
  useProjectControllerUpdateByIdMutation,
  useProjectControllerDeleteByIdMutation,
  useProjectControllerGetOrganizationQuery,
  useLazyProjectControllerGetOrganizationQuery,
  useProjectControllerUploadIconMutation,
  useProjectControllerDownloadIconQuery,
  useLazyProjectControllerDownloadIconQuery,
  useProjectSurveyControllerCreateMutation,
  useProjectSurveyControllerListQuery,
  useLazyProjectSurveyControllerListQuery,
  useProjectSurveyControllerCountQuery,
  useLazyProjectSurveyControllerCountQuery,
  useProjectProjectMemberControllerListQuery,
  useLazyProjectProjectMemberControllerListQuery,
  useProjectProjectMemberControllerCountQuery,
  useLazyProjectProjectMemberControllerCountQuery,
  useProjectProjectMemberControllerExistsQuery,
  useLazyProjectProjectMemberControllerExistsQuery,
  useProjectProjectGroupControllerCreateMutation,
  useProjectProjectGroupControllerListQuery,
  useLazyProjectProjectGroupControllerListQuery,
  useProjectProjectGroupControllerCountQuery,
  useLazyProjectProjectGroupControllerCountQuery,
  useProjectProjectInviteControllerInviteMutation,
  useProjectProjectInviteControllerListQuery,
  useLazyProjectProjectInviteControllerListQuery,
  useProjectProjectInviteControllerCountQuery,
  useLazyProjectProjectInviteControllerCountQuery,
  useOrganizationControllerCreateMutation,
  useOrganizationControllerListQuery,
  useLazyOrganizationControllerListQuery,
  useOrganizationControllerCountQuery,
  useLazyOrganizationControllerCountQuery,
  useOrganizationControllerExistsQuery,
  useLazyOrganizationControllerExistsQuery,
  useOrganizationControllerFindByIdQuery,
  useLazyOrganizationControllerFindByIdQuery,
  useOrganizationControllerUpdateByIdMutation,
  useOrganizationControllerDeleteByIdMutation,
  useOrganizationControllerUploadIconMutation,
  useOrganizationControllerDownloadIconQuery,
  useLazyOrganizationControllerDownloadIconQuery,
  useOrganizationControllerUploadBannerMutation,
  useOrganizationControllerDownloadBannerQuery,
  useLazyOrganizationControllerDownloadBannerQuery,
  useOrganizationMemberControllerCreateMutation,
  useOrganizationMemberControllerListQuery,
  useLazyOrganizationMemberControllerListQuery,
  useOrganizationMemberControllerCountQuery,
  useLazyOrganizationMemberControllerCountQuery,
  useOrganizationMemberControllerFindByIdQuery,
  useLazyOrganizationMemberControllerFindByIdQuery,
  useOrganizationMemberControllerUpdateByIdMutation,
  useOrganizationMemberControllerDeleteByIdMutation,
  useOrganizationGroupControllerCreateMutation,
  useOrganizationGroupControllerListQuery,
  useLazyOrganizationGroupControllerListQuery,
  useOrganizationGroupControllerCountQuery,
  useLazyOrganizationGroupControllerCountQuery,
  useOrganizationGroupControllerFindByIdQuery,
  useLazyOrganizationGroupControllerFindByIdQuery,
  useOrganizationGroupControllerUpdateByIdMutation,
  useOrganizationGroupControllerDeleteByIdMutation,
  useOrganizationProjectControllerCreateMutation,
  useOrganizationProjectControllerListQuery,
  useLazyOrganizationProjectControllerListQuery,
  useOrganizationProjectControllerCountQuery,
  useLazyOrganizationProjectControllerCountQuery,
  useOrganizationProjectControllerFindByKeyQuery,
  useLazyOrganizationProjectControllerFindByKeyQuery,
  useOrganizationScoreControllerCreateMutation,
  useOrganizationScoreControllerListQuery,
  useLazyOrganizationScoreControllerListQuery,
  useOrganizationScoreControllerCountQuery,
  useLazyOrganizationScoreControllerCountQuery,
  useProjectMemberControllerCreateMutation,
  useProjectMemberControllerListQuery,
  useLazyProjectMemberControllerListQuery,
  useProjectMemberControllerCountQuery,
  useLazyProjectMemberControllerCountQuery,
  useProjectMemberControllerFindByIdQuery,
  useLazyProjectMemberControllerFindByIdQuery,
  useProjectMemberControllerUpdateByIdMutation,
  useProjectMemberControllerDeleteByIdMutation,
  useProjectMemberSubmissionControllerListQuery,
  useLazyProjectMemberSubmissionControllerListQuery,
  useProjectMemberSubmissionControllerCountQuery,
  useLazyProjectMemberSubmissionControllerCountQuery,
  useProjectMemberUserControllerGetQuery,
  useLazyProjectMemberUserControllerGetQuery,
  useProjectGroupControllerCreateMutation,
  useProjectGroupControllerListQuery,
  useLazyProjectGroupControllerListQuery,
  useProjectGroupControllerCountQuery,
  useLazyProjectGroupControllerCountQuery,
  useProjectGroupControllerFindByIdQuery,
  useLazyProjectGroupControllerFindByIdQuery,
  useProjectGroupControllerUpdateByIdMutation,
  useProjectGroupControllerDeleteByIdMutation,
  useProjectGroupControllerProgressiveQuery,
  useLazyProjectGroupControllerProgressiveQuery,
  useProjectGroupMemberControllerListQuery,
  useLazyProjectGroupMemberControllerListQuery,
  useProjectGroupMemberControllerCountQuery,
  useLazyProjectGroupMemberControllerCountQuery,
  useProjectGroupSubmissionControllerListQuery,
  useLazyProjectGroupSubmissionControllerListQuery,
  useProjectGroupSubmissionControllerCountQuery,
  useLazyProjectGroupSubmissionControllerCountQuery,
  useProjectInviteControllerCreateMutation,
  useProjectInviteControllerListQuery,
  useLazyProjectInviteControllerListQuery,
  useProjectInviteControllerCountQuery,
  useLazyProjectInviteControllerCountQuery,
  useProjectInviteControllerFindByIdQuery,
  useLazyProjectInviteControllerFindByIdQuery,
  useProjectInviteControllerUpdateByIdMutation,
  useProjectInviteControllerDeleteByIdMutation,
  useProjectInviteControllerRegisterMutation,
  useSurveyControllerCreateMutation,
  useSurveyControllerListQuery,
  useLazySurveyControllerListQuery,
  useSurveyControllerCountQuery,
  useLazySurveyControllerCountQuery,
  useSurveyControllerGetSourcesQuery,
  useLazySurveyControllerGetSourcesQuery,
  useSurveyControllerGetSourceDataQuery,
  useLazySurveyControllerGetSourceDataQuery,
  useSurveyControllerFindByIdQuery,
  useLazySurveyControllerFindByIdQuery,
  useSurveyControllerUpdateByIdMutation,
  useSurveyControllerDeleteByIdMutation,
  useSurveyControllerOperationMutation,
  useSurveyControllerReplaceRootMutation,
  useSurveyControllerValidQuery,
  useLazySurveyControllerValidQuery,
  useSurveyControllerActivateMutation,
  useSurveyControllerDeactivateMutation,
  useSurveyControllerUploadIconMutation,
  useSurveyControllerDownloadIconQuery,
  useLazySurveyControllerDownloadIconQuery,
  useSurveySubmissionControllerCreateMutation,
  useSurveySubmissionControllerListQuery,
  useLazySurveySubmissionControllerListQuery,
  useSurveySubmissionControllerSubmitPublicMutation,
  useSurveySubmissionControllerCountQuery,
  useLazySurveySubmissionControllerCountQuery,
  useSurveySubmissionControllerExportMutation,
  useSubmissionControllerCreateMutation,
  useSubmissionControllerListQuery,
  useLazySubmissionControllerListQuery,
  useSubmissionControllerCountQuery,
  useLazySubmissionControllerCountQuery,
  useSubmissionControllerFindByIdQuery,
  useLazySubmissionControllerFindByIdQuery,
  useSubmissionControllerUpdateByIdMutation,
  useSubmissionControllerDeleteByIdMutation,
  useSubmissionControllerResetMutation,
  useSubmissionControllerSubmitMutation,
  useSubmissionControllerFlowMutation,
  useSubmissionControllerSetAnswersMutation,
  useScorePublicControllerListQuery,
  useLazyScorePublicControllerListQuery,
  useScorePublicControllerCountQuery,
  useLazyScorePublicControllerCountQuery,
  useScorePublicControllerFindByIdQuery,
  useLazyScorePublicControllerFindByIdQuery,
  useScorePublicControllerComputeMutation,
  useScoreControllerCreateMutation,
  useScoreControllerListQuery,
  useLazyScoreControllerListQuery,
  useScoreControllerCountQuery,
  useLazyScoreControllerCountQuery,
  useScoreControllerFindByIdQuery,
  useLazyScoreControllerFindByIdQuery,
  useScoreControllerUpdateByIdMutation,
  useScoreControllerDeleteByIdMutation,
  useScoreControllerValidateMutation,
  useScoreControllerComputeMutation,
  useTestControllerCreateMutation,
  useTestControllerListQuery,
  useLazyTestControllerListQuery,
  useTestControllerCountQuery,
  useLazyTestControllerCountQuery,
  useTestControllerFindByIdQuery,
  useLazyTestControllerFindByIdQuery,
  useTestControllerUpdateByIdMutation,
  useTestControllerDeleteByIdMutation,
  useTestControllerHistoryQuery,
  useLazyTestControllerHistoryQuery,
  useTestControllerLogQuery,
  useLazyTestControllerLogQuery,
} = injectedRtkApi;
