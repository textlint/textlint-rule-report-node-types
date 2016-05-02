// LICENSE : MIT
"use strict";
const TextLintCore = require("textlint").TextLintCore;
const TextLintNodeType = require("textlint").TextLintNodeType;
import reportRule from "../src/textlint-rule-report-node-types";
const assert = require("power-assert");
describe("textlint-rule-report-node-types", function () {
    context("when report type", function () {
        it("should messages includes the type message", function () {
            const textlint = new TextLintCore();
            textlint.setupRules({
                report: reportRule
            }, {
                report: {
                    nodeTypes: [TextLintNodeType.Str]
                }
            });
            return textlint.lintText("text").then(({messages}) => {
                assert.equal(messages.length, 1);
                assert.equal(messages[0].message, TextLintNodeType.Str);
            });
        });
    });
    context("when report multiple nodes", function () {
        it("should report multiple messages", function () {
            const textlint = new TextLintCore();
            textlint.setupRules({
                report: reportRule
            }, {
                report: {
                    nodeTypes: [TextLintNodeType.Str, TextLintNodeType.BlockQuote]
                }
            });
            return textlint.lintText(`text
> block`).then(({messages}) => {
                assert.equal(messages.length, 2);
            });
        });
        it("should messages count is matched reported error", function () {
            const textlint = new TextLintCore();
            textlint.setupRules({
                report: reportRule
            }, {
                report: {
                    nodeTypes: [TextLintNodeType.Str, TextLintNodeType.BlockQuote]
                }
            });
            return textlint.lintText("text").then(({messages}) => {
                assert.equal(messages.length, 1);
            });
        });
    });
});