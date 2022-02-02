buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath("com.moowork.gradle:gradle-node-plugin:1.3.1")
    }
}

plugins {
    java
    id("com.moowork.node") version "1.3.1"
}
