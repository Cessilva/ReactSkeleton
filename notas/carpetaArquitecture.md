Estructura Completa para Aplicación Next.js con Clean Architecture
src/
├── domain/
│   ├── entities/
│   │   ├── User.ts
│   │   ├── Role.ts
│   │   ├── Permission.ts
│   │   ├── Device.ts
│   │   ├── Application.ts
│   │   └── Error.ts
│   ├── repositories/
│   │   ├── AuthRepository.ts
│   │   ├── UserRepository.ts
│   │   ├── DeviceRepository.ts
│   │   └── ApplicationRepository.ts
│   ├── usecases/
│   │   ├── auth/
│   │   │   ├── LoginUseCase.ts
│   │   │   ├── LogoutUseCase.ts
│   │   │   ├── RegisterUseCase.ts
│   │   │   ├── RefreshTokenUseCase.ts
│   │   │   └── VerifyPermissionUseCase.ts
│   │   ├── user/
│   │   │   ├── GetUserProfileUseCase.ts
│   │   │   ├── UpdateUserProfileUseCase.ts
│   │   │   └── ChangePasswordUseCase.ts
│   │   ├── device/
│   │   │   ├── GetDevicesUseCase.ts
│   │   │   ├── GetDeviceByIdUseCase.ts
│   │   │   ├── CreateDeviceUseCase.ts
│   │   │   ├── UpdateDeviceUseCase.ts
│   │   │   └── DeleteDeviceUseCase.ts
│   │   └── application/
│   │       ├── GetApplicationsUseCase.ts
│   │       ├── GetApplicationByIdUseCase.ts
│   │       ├── CreateApplicationUseCase.ts
│   │       ├── UpdateApplicationUseCase.ts
│   │       └── DeleteApplicationUseCase.ts
│   └── types/
│       ├── common.ts
│       └── responses.ts
│
├── data/
│   ├── repositories/
│   │   ├── AuthRepositoryImpl.ts
│   │   ├── UserRepositoryImpl.ts
│   │   ├── DeviceRepositoryImpl.ts
│   │   └── ApplicationRepositoryImpl.ts
│   ├── datasources/
│   │   ├── api/
│   │   │   ├── AuthApiDataSource.ts
│   │   │   ├── UserApiDataSource.ts
│   │   │   ├── DeviceApiDataSource.ts
│   │   │   └── ApplicationApiDataSource.ts
│   │   └── local/
│   │       ├── AuthLocalDataSource.ts
│   │       └── UserLocalDataSource.ts
│   └── models/
│       ├── UserModel.ts
│       ├── DeviceModel.ts
│       └── ApplicationModel.ts
│
├── infrastructure/
│   ├── api/
│   │   ├── ApiClient.ts
│   │   ├── endpoints.ts
│   │   └── ApiResponse.ts
│   ├── auth/
│   │   ├── JwtService.ts
│   │   ├── PermissionService.ts
│   │   └── RoleService.ts
│   ├── storage/
│   │   ├── LocalStorageService.ts
│   │   └── SessionStorageService.ts
│   ├── middlewares/
│   │   ├── apiMiddleware.ts
│   │   ├── authMiddleware.ts
│   │   ├── errorMiddleware.ts
│   │   └── loggingMiddleware.ts
│   ├── services/
│   │   ├── NotificationService.ts
│   │   ├── LoggingService.ts
│   │   └── AnalyticsService.ts
│   └── config/
│       ├── apiConfig.ts
│       └── envConfig.ts
│
├── presentation/
│   ├── hooks/
│   │   ├── auth/
│   │   │   ├── useAuth.ts
│   │   │   └── usePermission.ts
│   │   ├── devices/
│   │   │   ├── useDevices.ts
│   │   │   └── useDevice.ts
│   │   ├── applications/
│   │   │   ├── useApplications.ts
│   │   │   └── useApplication.ts
│   │   └── common/
│   │       ├── usePagination.ts
│   │       ├── useSort.ts
│   │       ├── useFilter.ts
│   │       └── useForm.ts
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   ├── ThemeContext.tsx
│   │   ├── NotificationContext.tsx
│   │   ├── ErrorContext.tsx
│   │   └── FeatureFlagsContext.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── MainLayout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── PasswordResetForm.tsx
│   │   ├── devices/
│   │   │   ├── DeviceCard.tsx
│   │   │   ├── DeviceForm.tsx
│   │   │   └── DeviceFilters.tsx
│   │   ├── applications/
│   │   │   ├── ApplicationCard.tsx
│   │   │   ├── ApplicationForm.tsx
│   │   │   └── ApplicationFilters.tsx
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Table.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── Loader.tsx
│   │   └── feedback/
│   │       ├── ErrorBoundary.tsx
│   │       ├── ErrorMessage.tsx
│   │       ├── Toast.tsx
│   │       └── ConfirmDialog.tsx
│   └── utils/
│       ├── formatters.ts
│       ├── validators.ts
│       ├── dateUtils.ts
│       └── uiHelpers.ts
│
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.ts
│   │   │   ├── logout/
│   │   │   │   └── route.ts
│   │   │   ├── register/
│   │   │   │   └── route.ts
│   │   │   └── refresh/
│   │   │       └── route.ts
│   │   ├── users/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   │       └── route.ts
│   │   ├── devices/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   │       └── route.ts
│   │   └── applications/
│   │       ├── route.ts
│   │       └── [id]/
│   │           └── route.ts
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── forgot-password/
│   │   │   └── page.tsx
│   │   └── reset-password/
│   │       └── [token]/
│   │           └── page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   ├── devices/
│   │   │   ├── page.tsx
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── new/
│   │   │       └── page.tsx
│   │   └── applications/
│   │       ├── page.tsx
│   │       ├── [id]/
│   │       │   └── page.tsx
│   │       └── new/
│   │           └── page.tsx
│   ├── (admin)/
│   │   ├── layout.tsx
│   │   ├── users/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── roles/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── layout.tsx
│
├── lib/
│   ├── di/
│   │   ├── container.ts
│   │   ├── authModule.ts
│   │   ├── userModule.ts
│   │   ├── deviceModule.ts
│   │   └── applicationModule.ts
│   ├── config/
│   │   ├── env.ts
│   │   ├── theme.ts
│   │   ├── i18n.ts
│   │   └── constants.ts
│   ├── middleware/
│   │   ├── withAuth.ts
│   │   ├── withRole.ts
│   │   └── withPermission.ts
│   └── utils/
│       ├── serverUtils.ts
│       └── apiUtils.ts
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   └── icons/
│   ├── fonts/
│   └── favicon.ico
│
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── themes/
│       ├── light.css
│       └── dark.css
│
├── locales/
│   ├── en/
│   │   ├── common.json
│   │   ├── auth.json
│   │   ├── devices.json
│   │   └── applications.json
│   └── es/
│       ├── common.json
│       ├── auth.json
│       ├── devices.json
│       └── applications.json
│
├── tests/
│   ├── unit/
│   │   ├── domain/
│   │   ├── data/
│   │   ├── infrastructure/
│   │   └── presentation/
│   ├── integration/
│   │   ├── auth/
│   │   ├── devices/
│   │   └── applications/
│   ├── e2e/
│   │   ├── auth.spec.ts
│   │   ├── devices.spec.ts
│   │   └── applications.spec.ts
│   └── mocks/
│       ├── handlers.ts
│       ├── server.ts
│       └── data/
│
├── middleware.ts
├── next.config.js
├── next-env.d.ts
├── tsconfig.json
├── package.json
├── .env
├── .env.development
└── .env.production





src/
├── domain/
│   ├── entities/
│   │   ├── User.ts
│   │   ├── Role.ts
│   │   ├── Permission.ts
│   │   ├── Device.ts
│   │   ├── Application.ts
│   │   └── Error.ts
│   ├── repositories/
│   │   ├── AuthRepository.ts
│   │   ├── UserRepository.ts
│   │   ├── DeviceRepository.ts
│   │   └── ApplicationRepository.ts
│   ├── usecases/
│   │   ├── auth/
│   │   │   ├── LoginUseCase.ts
│   │   │   ├── LogoutUseCase.ts
│   │   │   ├── RegisterUseCase.ts
│   │   │   ├── RefreshTokenUseCase.ts
│   │   │   └── VerifyPermissionUseCase.ts
│   │   ├── user/
│   │   │   ├── GetUserProfileUseCase.ts
│   │   │   ├── UpdateUserProfileUseCase.ts
│   │   │   └── ChangePasswordUseCase.ts
│   │   ├── device/
│   │   │   ├── GetDevicesUseCase.ts
│   │   │   ├── GetDeviceByIdUseCase.ts
│   │   │   ├── CreateDeviceUseCase.ts
│   │   │   ├── UpdateDeviceUseCase.ts
│   │   │   └── DeleteDeviceUseCase.ts
│   │   └── application/
│   │       ├── GetApplicationsUseCase.ts
│   │       ├── GetApplicationByIdUseCase.ts
│   │       ├── CreateApplicationUseCase.ts
│   │       ├── UpdateApplicationUseCase.ts
│   │       └── DeleteApplicationUseCase.ts
│   └── types/
│       ├── common.ts
│       └── responses.ts
│
├── data/
│   ├── repositories/
│   │   ├── AuthRepositoryImpl.ts
│   │   ├── UserRepositoryImpl.ts
│   │   ├── DeviceRepositoryImpl.ts
│   │   └── ApplicationRepositoryImpl.ts
│   ├── datasources/
│   │   ├── api/
│   │   │   ├── AuthApiDataSource.ts
│   │   │   ├── UserApiDataSource.ts
│   │   │   ├── DeviceApiDataSource.ts
│   │   │   └── ApplicationApiDataSource.ts
│   │   └── local/
│   │       ├── AuthLocalDataSource.ts
│   │       └── UserLocalDataSource.ts
│   └── models/
│       ├── UserModel.ts
│       ├── DeviceModel.ts
│       └── ApplicationModel.ts
│
├── infrastructure/
│   ├── api/
│   │   ├── ApiClient.ts
│   │   ├── endpoints.ts
│   │   └── ApiResponse.ts
│   ├── auth/
│   │   ├── JwtService.ts
│   │   ├── PermissionService.ts
│   │   └── RoleService.ts
│   ├── storage/
│   │   ├── LocalStorageService.ts
│   │   └── SessionStorageService.ts
│   ├── middlewares/
│   │   ├── apiMiddleware.ts
│   │   ├── authMiddleware.ts
│   │   ├── errorMiddleware.ts
│   │   └── loggingMiddleware.ts
│   ├── services/
│   │   ├── NotificationService.ts
│   │   ├── LoggingService.ts
│   │   └── AnalyticsService.ts
│   └── config/
│       ├── apiConfig.ts
│       └── envConfig.ts
│
├── presentation/
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   ├── ForgotPasswordPage.tsx
│   │   │   └── ResetPasswordPage.tsx
│   │   ├── dashboard/
│   │   │   ├── DashboardPage.tsx
│   │   │   └── ProfilePage.tsx
│   │   ├── devices/
│   │   │   ├── DevicesListPage.tsx
│   │   │   ├── DeviceDetailPage.tsx
│   │   │   ├── DeviceCreatePage.tsx
│   │   │   └── DeviceEditPage.tsx
│   │   ├── applications/
│   │   │   ├── ApplicationsListPage.tsx
│   │   │   ├── ApplicationDetailPage.tsx
│   │   │   ├── ApplicationCreatePage.tsx
│   │   │   └── ApplicationEditPage.tsx
│   │   ├── admin/
│   │   │   ├── UsersManagementPage.tsx
│   │   │   └── RolesManagementPage.tsx
│   │   └── common/
│   │       ├── HomePage.tsx
│   │       ├── NotFoundPage.tsx
│   │       └── ErrorPage.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── MainLayout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── PasswordResetForm.tsx
│   │   ├── devices/
│   │   │   ├── DeviceCard.tsx
│   │   │   ├── DeviceForm.tsx
│   │   │   └── DeviceFilters.tsx
│   │   ├── applications/
│   │   │   ├── ApplicationCard.tsx
│   │   │   ├── ApplicationForm.tsx
│   │   │   └── ApplicationFilters.tsx
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Table.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── Loader.tsx
│   │   └── feedback/
│   │       ├── ErrorBoundary.tsx
│   │       ├── ErrorMessage.tsx
│   │       ├── Toast.tsx
│   │       └── ConfirmDialog.tsx
│   ├── hooks/
│   │   ├── auth/
│   │   │   ├── useAuth.ts
│   │   │   └── usePermission.ts
│   │   ├── devices/
│   │   │   ├── useDevices.ts
│   │   │   └── useDevice.ts
│   │   ├── applications/
│   │   │   ├── useApplications.ts
│   │   │   └── useApplication.ts
│   │   └── common/
│   │       ├── usePagination.ts
│   │       ├── useSort.ts
│   │       ├── useFilter.ts
│   │       └── useForm.ts
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   ├── ThemeContext.tsx
│   │   
IR
Ivan Ramirez

no terminaste , continua a partir de : │ ├── context/ │ │ ├── AuthContext.tsx │ │ ├── ThemeContext.tsx │ │

Claude 3.7 Sonnet
Claude 3.7 Sonnet

│   ├── context/
│   │   ├── AuthContext.tsx
│   │   ├── ThemeContext.tsx
│   │   ├── NotificationContext.tsx
│   │   ├── ErrorContext.tsx
│   │   └── FeatureFlagsContext.tsx
│   └── utils/
│       ├── formatters.ts
│       ├── validators.ts
│       ├── dateUtils.ts
│       └── uiHelpers.ts
│
├── app/
│   ├── di/
│   │   ├── container.ts
│   │   ├── authModule.ts
│   │   ├── userModule.ts
│   │   ├── deviceModule.ts
│   │   └── applicationModule.ts
│   ├── routes/
│   │   ├── AppRouter.tsx
│   │   ├── routes.ts
│   │   ├── routeConfig.ts
│   │   └── middleware/
│   │       ├── PrivateRoute.tsx
│   │       ├── AdminRoute.tsx
│   │       ├── RoleBasedRoute.tsx
│   │       └── PermissionGuard.tsx
│   ├── config/
│   │   ├── env.ts
│   │   ├── theme.ts
│   │   ├── i18n.ts
│   │   └── constants.ts
│   ├── providers/
│   │   ├── AppProviders.tsx
│   │   ├── AuthProvider.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ErrorBoundaryProvider.tsx
│   ├── store/
│   │   ├── index.ts
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   ├── deviceSlice.ts
│   │   │   └── applicationSlice.ts
│   │   └── middleware/
│   │       ├── apiMiddleware.ts
│   │       └── errorMiddleware.ts
│   └── App.tsx
│
├── assets/
│   ├── images/
│   │   ├── logo.svg
│   │   └── icons/
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── themes/
│   └── fonts/
│
├── locales/
│   ├── en/
│   │   ├── common.json
│   │   ├── auth.json
│   │   ├── devices.json
│   │   └── applications.json
│   └── es/
│       ├── common.json
│       ├── auth.json
│       ├── devices.json
│       └── applications.json
│
├── tests/
│   ├── unit/
│   │   ├── domain/
│   │   ├── data/
│   │   ├── infrastructure/
│   │   └── presentation/
│   ├── integration/
│   │   ├── auth/
│   │   ├── devices/
│   │   └── applications/
│   ├── e2e/
│   │   ├── auth.spec.ts
│   │   ├── devices.spec.ts
│   │   └── applications.spec.ts
│   └── mocks/
│       ├── handlers.ts
│       ├── server.ts
│       └── data/
│
├── index.tsx
├── setupTests.ts
├── react-app-env.d.ts
├── .env
├── .env.development
└── .env.production