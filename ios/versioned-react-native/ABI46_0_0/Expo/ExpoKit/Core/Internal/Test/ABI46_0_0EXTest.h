// Copyright 2015-present 650 Industries. All rights reserved.

#import <ABI46_0_0React/ABI46_0_0RCTBridgeModule.h>

FOUNDATION_EXPORT NSNotificationName ABI46_0_0EXTestSuiteCompletedNotification;

typedef enum ABI46_0_0EXTestEnvironment {
  ABI46_0_0EXTestEnvironmentNone = 0,
  ABI46_0_0EXTestEnvironmentLocal = 1,
  ABI46_0_0EXTestEnvironmentCI = 2,
} ABI46_0_0EXTestEnvironment;

@interface ABI46_0_0EXTest : NSObject <ABI46_0_0RCTBridgeModule>

- (instancetype)initWithEnvironment:(ABI46_0_0EXTestEnvironment)environment NS_DESIGNATED_INITIALIZER;
- (instancetype)init NS_UNAVAILABLE;

+ (ABI46_0_0EXTestEnvironment)testEnvironmentFromString:(NSString *)testEnvironmentString;

@end
