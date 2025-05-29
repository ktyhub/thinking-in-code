def define_env(env):
    @env.macro
    def nav_list(nav):
        def walk(items, level=0):
            md = ""
            for item in items:
                if isinstance(item, dict):
                    for k, v in item.items():
                        md += "  " * level + f"- [{k}]({v if isinstance(v, str) else '#'})\n"
                        if isinstance(v, list):
                            md += walk(v, level + 1)
                else:
                    md += "  " * level + f"- [{item.title}]({item.url})\n"
            return md
        return walk(nav)