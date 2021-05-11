# Folder Structure Conventions

> Folder structure options and naming conventions for software projects

### A typical top-level directory layout

    .
    ├── config                  # Config files (ex: config dotenv)
    ├── model                   # Model files (storage model for sequelize (ORM))
    ├── repository              # Repository files (storage sequelize command between query and  model)
    ├── routes                  # Routes files (path for api)
    ├── test                    # Automated tests (unit test)
    └── README.md
    └── ...

### Automated tests

    .
    ├── ...
    ├── test                    # Test files (alternatively `spec` or `tests`)

    │   └── unit                # Unit tests
    └── ...
