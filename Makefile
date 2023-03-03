ROME:=npx rome
PROBLEM=
FILE=src/$(PROBLEM)/main.js
TEST_FILE=src/$(PROBLEM)/main.test.js

file:
	@[ -n "$(PROBLEM)" ] || { echo 'PROBLEM が指定されていません'; exit 1; }
	@mkdir -p src/$(PROBLEM) && touch $(FILE)

run:
	@[ -n "$(PROBLEM)" ] || { echo 'PROBLEM が指定されていません'; exit 1; }
	@node $(FILE)

check:
	@[ -n "$(PROBLEM)" ] || { echo 'PROBLEM が指定されていません'; exit 1; }
	@$(ROME) check $(FILE)

fmt:
	@[ -n "$(PROBLEM)" ] || { echo 'PROBLEM が指定されていません'; exit 1; }
	@$(ROME) format $(FILE) --write

test-file:
	@[ -n "$(PROBLEM)" ] || { echo 'PROBLEM が指定されていません'; exit 1; }
	@cp templates/main.test.js $(TEST_FILE)

test:
	@[ -n "$(PROBLEM)" ] || { echo 'PROBLEM が指定されていません'; exit 1; }
	@npx jest $(TEST_FILE)

sample-test:
	@npx jest sample/main.test.js