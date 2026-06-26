import re


SECURITY_PATTERNS = {
    "Hardcoded API Key":
        r'api[_-]?key\s*=\s*["\'].*?["\']',

    "Hardcoded Password":
        r'password\s*=\s*["\'].*?["\']',

    "AWS Access Key":
        r'AKIA[0-9A-Z]{16}',

    "Unsafe eval":
        r'\beval\s*\(',

    "Unsafe exec":
        r'\bexec\s*\(',

    "Subprocess Shell=True":
        r'subprocess\..*shell\s*=\s*True',

    "Potential SQL Injection":
        r'SELECT .* \+'
}


def scan_repository(parsed_result):

    findings = []

    for file in parsed_result["files"]:

        try:

            with open(
                file["path"],
                "r",
                encoding="utf-8",
                errors="ignore"
            ) as f:

                content = f.read()

        except Exception:
            continue

        for issue_name, pattern in SECURITY_PATTERNS.items():

            matches = re.findall(
                pattern,
                content,
                re.IGNORECASE
            )

            if matches:

                findings.append(
                    {
                        "file": file["path"],
                        "issue": issue_name,
                        "matches_found": len(matches),
                        "severity":
                            determine_severity(
                                issue_name
                            )
                    }
                )

    return findings


def determine_severity(issue):

    high = [
        "Hardcoded API Key",
        "Hardcoded Password",
        "AWS Access Key"
    ]

    medium = [
        "Unsafe eval",
        "Unsafe exec",
        "Subprocess Shell=True"
    ]

    if issue in high:
        return "HIGH"

    if issue in medium:
        return "MEDIUM"

    return "LOW"