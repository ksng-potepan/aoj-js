ROME:=npx rome
PROBLEM=
FILE=src/$(PROBLEM)/main.js

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
